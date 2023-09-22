import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import HomeHeadLine from '../HomeHeadLine/HomeHeadLine';

const Home = () => {
    return (
        <div>
            <HomeHeadLine></HomeHeadLine>
        </div>
    );
};

export default Home;