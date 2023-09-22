import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import HomeHeadLine from '../HomeHeadLine/HomeHeadLine';
import accounts from '../../assets/account.png'
import business from '../../assets/business.png';
import marketing from '../../assets/social-media.png';
import engineering from '../../assets/chip.png';

const Home = () => {
    return (
        <div>
            <HomeHeadLine></HomeHeadLine>
            <section className='mt-32'>
                <h1 className='text-center text-5xl font-extrabold mb-5'>Job Category List</h1>
                <p className='text-center text-[#A3A3A3]'>Select your dream field for you successful Career.</p>
                <div className='grid grid-cols-4 mt-8 gap-x-6 justify-items-center'>
                    <div className='w-[311px] h-[243px] bg p-10'>
                        <div className='p-4  w-[70px] h-[70px] bg2 mb-8'>
                            <img src={accounts} alt="" />
                        </div>
                        <h1 className='text-xl font-extrabold'>Accounts & Finance</h1>
                        <p className='text-[#A3A3A3] '>300 Jobs Available</p>
                    </div>
                    <div className='w-[311px] h-[243px] bg p-10'>
                        <div className='p-4  w-[70px] h-[70px] bg2 mb-8'>
                            <img src={business} alt="" />
                        </div>
                        <h1 className='text-xl font-extrabold'>Creative Design</h1>
                        <p className='text-[#A3A3A3] '>100+ Jobs Available</p>
                    </div>
                    <div className='w-[311px] h-[243px] bg p-10'>
                        <div className='p-4  w-[70px] h-[70px] bg2 mb-8'>
                            <img src={marketing} alt="" />
                        </div>
                        <h1 className='text-xl font-extrabold'>Marketing & Scales</h1>
                        <p className='text-[#A3A3A3] '>150 Jobs Available</p>
                    </div>
                    <div className='w-[311px] h-[243px] bg p-10'>
                        <div className='p-4  w-[70px] h-[70px] bg2 mb-8'>
                            <img src={engineering} alt="" />
                        </div>
                        <h1 className='text-xl font-extrabold'>Engineering Job</h1>
                        <p className='text-[#A3A3A3] '>224 Jobs Available</p>
                    </div>
                    
                </div>
            </section>
            <section>

            </section>
        </div>
    );
};

export default Home;