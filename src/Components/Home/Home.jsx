import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import HomeHeadLine from '../HomeHeadLine/HomeHeadLine';

const Home = () => {
    return (
        <div>
            <HomeHeadLine></HomeHeadLine>
            <section className='mt-32'>
                <h1 className='text-center '>Job Category List</h1>
                <p className='text-center'>Select your dream field for you successful Career.</p>
            </section>
        </div>
    );
};

export default Home;