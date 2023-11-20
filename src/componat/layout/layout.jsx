import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='w-full flex flex-col items-center'>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;