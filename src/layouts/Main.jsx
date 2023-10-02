import React from 'react';
import { StickyNavbar } from './Layout';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';

const Main = () => {
    return (
        <div className=''>
            {/* <Navbar></Navbar> */}
            <StickyNavbar></StickyNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;