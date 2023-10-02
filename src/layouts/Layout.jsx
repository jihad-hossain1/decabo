import React, { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import {HiOutlineMenu,HiOutlineX,HiOutlineChevronDown} from 'react-icons/hi'
import { Link,NavLink} from "react-router-dom";
import { ProfileMenu } from "../components/profileMenu/Profilemenu";


export const StickyNavbar=() =>{
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small "
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink 
        to="/courses"
        className={({ isActive }) => isActive ? "text-cyan-700 flex justify-between md:justify-start  items-center space-x-2" : "flex justify-between md:justify-start items-center space-x-2"
    }>
      <span>Courses</span> 
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="/products"
        className={({ isActive }) => isActive ? "text-cyan-700 flex justify-between md:justify-start  items-center space-x-2" : "flex justify-between md:justify-start items-center space-x-2"
    }>
      <span>Products</span> 
        </NavLink>
      </Typography>
      
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="/pricing"
        className={({ isActive }) => isActive ? "text-cyan-700 flex justify-between md:justify-start  items-center space-x-2" : "flex justify-between md:justify-start items-center space-x-2"
    }>
      <span>Pricing</span> 
        </NavLink>
      </Typography>
      
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="/customers"
        className={({ isActive }) => isActive ? "text-cyan-700 flex justify-between md:justify-start  items-center space-x-2" : "flex justify-between md:justify-start items-center space-x-2"
    }>
      <span>Customers</span> 
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="/resources"
        className={({ isActive }) => isActive ? "text-cyan-700 flex justify-between md:justify-start  items-center space-x-2" : "flex justify-between md:justify-start items-center space-x-2"
    }>
      <span>Resources</span> 
        </NavLink>
      </Typography>
      
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink to="/about"
        className={({ isActive }) => isActive ? "text-cyan-700 flex justify-between md:justify-start  items-center space-x-2" : "flex justify-between md:justify-start items-center space-x-2"
        }>
          <span>About</span> <HiOutlineChevronDown className="text-xl text-blue-gray-600"></HiOutlineChevronDown>
        </NavLink>
      </Typography>
      
    </ul>
  );
 
  return (
    <>
      <Navbar className=" sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <>
        <div className=" max-w-5xl mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            as={Link}
            href={`/`}
            className="mr-4 cursor-pointer py-1.5 font-bold text-xl text-cyan-700"
          >
            Docebo
          </Typography>
          <div className="mr-4 hidden lg:block">{navList}</div>
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
        </div>
        <MobileNav open={openNav}>
          {navList}
          <ProfileMenu></ProfileMenu>
         
        </MobileNav>
        
        </>
      </Navbar>
    </>
  );
}