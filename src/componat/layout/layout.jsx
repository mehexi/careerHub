import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='w-9/12 flex flex-col'>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;