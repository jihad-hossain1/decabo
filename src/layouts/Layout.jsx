import React, { useContext, useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

// import {MdOutlineLanguage} from 'react-icons/md'
import { Link, NavLink } from "react-router-dom";
import { ProfileMenu } from "../components/profileMenu/Profilemenu";
import Search from "../components/search/Search";
import { AuthContext } from "../provider/AuthProvider";
import Categories from "../components/Categories/Categories";
import { DialogWithLanguage } from "../components/language/Language";
import Notification from "../components/notification/Notification";
import Favorites from "../components/favorite/Favorite";
import HeaderCarts from "../pages/dashboard/carts/headerCarts/HeaderCarts";

export const StickyNavbar = () => {
  const { user } = useContext(AuthContext);
  const [openNav, setOpenNav] = useState(false);
  // search state & function
  const [coursesSearch, setCoursesSearch] = useState([]);
  const [searchText, setSearchText] = useState("");
  const handleSearch = async () => {
    await fetch(`${import.meta.env.VITE_BASE_URL}/getcourseText/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setCoursesSearch(data);
      });
  };
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <>
      <Navbar className=" sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <>
          <div className=" max-w-screen-2xl mx-auto flex items-center justify-between space-x-2 text-blue-gray-900">
            <div className="flex space-x-2 items-center">
              <Typography
                as={Link}
                href={`/`}
                className="mr-4 cursor-pointer py-1.5 font-bold text-xl text-teal-700"
              >
                Docebo
              </Typography>
              {/* <div className="mr-4 hidden lg:block">{navList}</div> */}
              <div className="mr-4 hidden lg:block">
                {/* categories  */}
                <div>
                  <Categories />
                </div>
              </div>
            </div>
            {/* search section  */}
            <div className="">
              <Search
                handleSearch={handleSearch}
                setSearchText={setSearchText}
                searchText={searchText}
                setCoursesSearch={setCoursesSearch}
                coursesSearch={coursesSearch}
              />
            </div>
            <div className="hidden md:flex items-center space-x-3">
              <div>
                <div className="flex items-center text-xs md:text-sm space-x-3">
                  <Link to={"/"} className="hover:text-teal-700">
                    Bussiness
                  </Link>
                  <Link to={"/"} className="hover:text-teal-700">
                    Teach
                  </Link>
                  <div className="hidden md:block">
                    {/* carts section  */}
                    <HeaderCarts />
                  </div>
                </div>
              </div>
              {user ? (
                <>
                  <div className="hidden md:block">
                    <Favorites />
                  </div>
                  {/* Notification  */}
                  <Notification />
                  <div className="">
                    <div className="hidden md:block">
                      <ProfileMenu></ProfileMenu>
                    </div>
                    <IconButton
                      variant="text"
                      className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                      ripple={false}
                      onClick={() => setOpenNav(!openNav)}
                    >
                      {openNav ? (
                        <HiOutlineX className="text-3xl"></HiOutlineX>
                      ) : (
                        <HiOutlineMenu className="text-3xl"></HiOutlineMenu>
                      )}
                    </IconButton>
                  </div>
                </>
              ) : (
                <div className="flex items-center space-x-3 text-sm">
                  <Link to={"/signin"}>
                    <Button
                      color="blue-gray"
                      variant="outlined"
                      className="rounded-sm text-gray-900 py-2 hover:bg-gray-200  px-3 flex justify-center "
                    >
                      login
                    </Button>
                  </Link>
                  <Link to={"/register"}>
                    <Button
                      color="blue-gray"
                      variant="outlined"
                      className="rounded-sm text-gray-50 py-2 hover:bg-gray-50 hover:text-blue-gray-900 bg-blue-gray-900 px-3 flex justify-center "
                    >
                      Signup
                    </Button>
                  </Link>
                </div>
              )}
              {/* language button for without login  */}
              <div className={user ? "hidden" : "block"}>
                <DialogWithLanguage />
              </div>
            </div>
          </div>
          <MobileNav open={openNav}>
            {"navlist"}
            <ul>
              <li>comming</li>
            </ul>
            {/* <ProfileMenu></ProfileMenu> */}
          </MobileNav>
        </>
      </Navbar>
    </>
  );
};


