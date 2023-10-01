import React, { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import {HiOutlineMenu,HiOutlineX,HiOutlineChevronDown} from 'react-icons/hi'
import { Link, Outlet ,NavLink} from "react-router-dom";



export const SidebarWithLogo=() =>{
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const navList = (
    <ul className="">
      
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="/dashboard/addCourse"
        className={({ isActive }) => isActive ? "text-cyan-700 flex justify-between md:justify-start  items-center space-x-2" : "flex justify-between md:justify-start items-center space-x-2"
    }>
      <span>Add Course</span> 
        </NavLink>
      </Typography>
      
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="/"
        className={({ isActive }) => isActive ? "text-cyan-700 flex justify-between md:justify-start  items-center space-x-2" : "flex justify-between md:justify-start items-center space-x-2"
        }>
          <span>go home page</span> <HiOutlineChevronDown className="text-xl text-blue-gray-600"></HiOutlineChevronDown>
        </NavLink>
      </Typography>
      
    </ul>
  );
 
 
  return (
    <div className="">
      
      <div className=" sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <>
        <div className="flex flex-col text-blue-gray-900">
          <Typography
            as={Link}
            href={`/`}
            className="mr-4 cursor-pointer py-1.5 font-bold text-xl text-cyan-700"
          >
            Docebo
          </Typography>
          <div className="mr-4 hidden lg:block">{navList}</div>
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
        <MobileNav open={openNav}>
          {navList}
        
         
        </MobileNav>
        </>
      </div>
      
      <div className="py-12   min-h-screen">
        <Outlet></Outlet>
      </div>
      
    </div>
  );
}