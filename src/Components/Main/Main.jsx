import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';


const Main = () => {
    return (
        <div className='text-style'>
            <Header></Header>
            <Outlet></Outlet>
            <Toaster></Toaster>
        </div>
    );
};

export default Main;