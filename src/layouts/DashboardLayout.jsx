import React from "react";
import { SidebarWithLogo } from "./SidebarWithLogo";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className='md:flex'>
      <SidebarWithLogo></SidebarWithLogo>
      <div className='md:flex relative'>
        <div className=' h-screen md:w-7xl md:mx-auto mt-4 md:mt-20'>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
