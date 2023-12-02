import React, { useContext, useEffect, useState } from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  Dialog,
} from "@material-tailwind/react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { ProfileMenu } from "../components/profileMenu/Profilemenu";
import Search from "../components/search/Search";
import { AuthContext } from "../provider/AuthProvider";
import Categories from "../components/Categories/Categories";
import { DialogWithLanguage } from "../components/language/Language";
import Notification from "../components/notification/Notification";
import Favorites from "../components/favorite/Favorite";
import HeaderCarts from "../pages/dashboard/carts/headerCarts/HeaderCarts";
import { GiHamburgerMenu } from "react-icons/gi";

export const StickyNavbar = () => {
  const { user } = useContext(AuthContext);
  const [openNav, setOpenNav] = useState(false);
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
  const [isActive, setIsActive] = useState(false);
  const openDrawer = () => setIsActive(true);
  const closeDrawer = () => setIsActive(false);
  const [isInputOpen, setIsInputOpen] = useState(false);
  return (
    <>
      <Navbar className="hidden md:block sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
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
        </>
      </Navbar>
      <div className="py-3 md:hidden bg-blue-gray-50 pl-2 pt-2 flex justify-between items-center">
        <Typography
          as={Link}
          href={`/`}
          className="mr-4 cursor-pointer py-1.5 font-bold text-xl text-teal-700"
        >
          Docebo
        </Typography>
        <div className="flex items-center">
          <div className="">
            <Search
              handleSearch={handleSearch}
              setSearchText={setSearchText}
              searchText={searchText}
              setCoursesSearch={setCoursesSearch}
              coursesSearch={coursesSearch}
            />
          </div>
          {user ? (
            <div className="flex items-center gap-2">
              <div className="">
                <Favorites />
              </div>
              <Notification />
              <div className="">
                <div className="">
                  <ProfileMenu></ProfileMenu>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <button onClick={openDrawer} className="mr-3">
            <GiHamburgerMenu size={26} />
          </button>
        </div>
        <Drawer placement="right" open={isActive} onClose={closeDrawer}>
          <div className="mb-2 flex items-center justify-between p-4">
            {user ? (
              <>
                <div>{user?.displayName}</div>
              </>
            ) : (
              <div className="flex items-center space-x-3 text-sm">
                <Link onClick={() => setIsActive(!isActive)} to={"/signin"}>
                  <Button
                    color="blue-gray"
                    variant="outlined"
                    className="rounded-sm text-gray-900 py-2 hover:bg-gray-200  px-3 flex justify-center "
                  >
                    login
                  </Button>
                </Link>
                <Link onClick={() => setIsActive(!isActive)} to={"/register"}>
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
            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <List>
            <ListItem>
              <Link onClick={() => setIsActive(!isActive)} to={`/courses`}>
                All Categories
              </Link>
            </ListItem>
            <ListItem>
              <Link onClick={() => setIsActive(!isActive)} to={`/courses`}>
                On Bussiness
              </Link>
            </ListItem>
            <ListItem>
              <Link onClick={() => setIsActive(!isActive)} to={`/about`}>
                About
              </Link>
            </ListItem>
          </List>
          <div className="flex justify-end flex-col ml-7 items-end fixed bottom-6 ">
            <div className="flex gap-5 items-center">
              <ListItem>
                <Link onClick={() => setIsActive(!isActive)} to={`/courses`}>
                  Business
                </Link>
              </ListItem>
              <ListItem>
                <Link onClick={() => setIsActive(!isActive)} to={`/courses`}>
                  Teach
                </Link>
              </ListItem>
              <DialogWithLanguage />
            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
};




