import React from 'react';
import { SidebarWithLogo } from './SidebarWithLogo';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
            <SidebarWithLogo></SidebarWithLogo>
            {/* <Outlet></Outlet> */}
        </div>
    );
};

export default DashboardLayout;