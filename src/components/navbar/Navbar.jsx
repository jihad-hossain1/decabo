import React from 'react';

const Navbar = () => {
    const navMenu = (
        <>
            <li>
                logo
            </li>
            <li>
                logo
            </li>
            <li>
                logo
            </li>
        </>
    )
    return (
        <div className='fixed z-10  bg-blue-gray-100 bg-opacity-40 text-black max-w-screen-xl mx-auto flex justify-between items-center'>
            <div>Logo </div>
            <ul className='flex space-x-10'>
                {navMenu}
            </ul>
            <div>
                login
            </div>
        </div>
    );
};

export default Navbar;