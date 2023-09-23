import React from 'react';
import groupPic from '../../assets/Group 9969.png';
const Footer = () => {
    return (
        <div className='bg-black text-white p-32 rounded'>
            <div className='grid grid-cols-5  '>
                <div>
                    <h1 className='text-3xl font-bold mb-5'><span className='text-yellow-400'>Job</span><span className='text-green-400'>Finder</span></h1>
                    <p className='text-[#FFFFFFB2] mb-5'>Hera hvae so many platform <br></br> for chose your bright carrer.<br></br>So don't late. Lets find your job.</p>
                    <div>
                        <img src={groupPic} alt="" />
                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-semibold mb-5'>Company</h1>
                    <div className='text-[#FFFFFFB2] flex flex-col gap-y-5'>
                        <p>About Us</p>
                        <p>Work</p>
                        <p>Latests News</p>
                        <p>Careers</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-semibold mb-5'>Product</h1>
                    <div className='text-[#FFFFFFB2]  flex flex-col gap-y-5'>
                        <p>Prototype</p>
                        <p>Plans & Pricing</p>
                        <p>Customers</p>
                        <p>Integrations</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-semibold mb-5'>Supports</h1>
                    <div className='text-[#FFFFFFB2] flex flex-col gap-y-5'>
                        <p>Help Desk</p>
                        <p>Sales</p>
                        <p>Become a Partner</p>
                        <p>Developers</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-semibold mb-5'>Contact</h1>
                    <div className='text-[#FFFFFFB2] flex flex-col gap-y-5'>
                        <p>524 Broadway,NYC</p>
                        <p>+1777-978-5570</p>
                    </div>
                </div>
            </div>
            <div className='w-full border-t bg3 border-sky-600 mt-14'>
            </div>
            <div className='flex justify-between text-[#FFFFFF66] text-sm mt-12'>
                <p>@2023 JobFinder. All Right Reserved</p>
                <p>Powered by JobFinder</p>
            </div>
        </div>
    );
};

export default Footer;