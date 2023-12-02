import React from 'react';
import { StickyNavbar } from './Layout';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';


const Main = () => {
    return (
      <main className="">
        <StickyNavbar></StickyNavbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </main>
    );
};

export default Main;