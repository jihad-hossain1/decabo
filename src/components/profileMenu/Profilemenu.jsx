import React, { useContext, useState } from "react";
import {
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import { FaUserGraduate, FaSignOutAlt,FaSignInAlt } from "react-icons/fa";
import { HiOutlineChevronDown } from "react-icons/hi";
import { AiFillSetting } from "react-icons/ai";
import { TbHelpTriangleFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

export const ProfileMenu = () => {
  const {user} = useContext(AuthContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement='bottom-end'>
      <MenuHandler>
        <Button
          variant='text'
          color='blue-gray'
          className='flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto'
        >
          <Avatar
            variant='circular'
            size='sm'
            alt='tania andrew'
            className='border border-gray-900 p-0.5'
            src={
              user
                ? user?.photoURL
                : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            }
          />
          <HiOutlineChevronDown
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className='p-1'>
        {user ? (
          <>
            <Link to={`/`}>
              <MenuItem
                onClick={closeMenu}
                className='flex items-center  gap-2 rounded'
              >
                <FaUserGraduate></FaUserGraduate> <span>Profile</span>
              </MenuItem>
            </Link>
            <Link to={`/`}>
              <MenuItem
                onClick={closeMenu}
                className='flex items-center  gap-2 rounded'
              >
                <AiFillSetting></AiFillSetting> <span>Edit Profile</span>
              </MenuItem>
            </Link>
            <Link to={`/dashboard`}>
              <MenuItem
                onClick={closeMenu}
                className='flex items-center  gap-2 rounded'
              >
                <AiFillSetting></AiFillSetting> <span>Dashboard</span>
              </MenuItem>
            </Link>
            <MenuItem
              onClick={closeMenu}
              className='flex items-center  gap-2 rounded'
            >
              <FaSignOutAlt></FaSignOutAlt> <span>Log Out</span>
            </MenuItem>
          </>
        ) : (
          <>
           <Link>
           <MenuItem
              onClick={closeMenu}
              className='flex items-center  gap-2 rounded'
            >
              <TbHelpTriangleFilled></TbHelpTriangleFilled> <span>Help</span>
            </MenuItem>
           </Link>
            <Link to={`/`}>
              <MenuItem
                onClick={closeMenu}
                className='flex items-center  gap-2 rounded'
              >
                <FaSignInAlt></FaSignInAlt> <span>Log In</span>
              </MenuItem>
            </Link>
          </>
        )}
      </MenuList>
    </Menu>
  );
};
