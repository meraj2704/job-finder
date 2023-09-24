import React from 'react';
import img1 from '../../assets/professional.png'

const HomeHeadLine = () => {
    return (
        <div className='bg grid grid-cols-2  items-center justify-items-center pt-5'>
            <div className='font-bold flex-row '>
                <h1 className='h1 text-green-700'>One Step</h1>
                <h1 className='h1'><span className='text-yellow-400 text-4xl'>Closer</span> To Your</h1>
                <h1 className='text-4xl mb-5 text-red-700'>Dream Job</h1>
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Nostrum, reiciendis. Accusamus laudantium dolorum,<br /> corporis aut  voluptate ex non labore quis?</p>
                <button className='btnn'>Get Started</button>
            </div>
            <div>
                <img src={img1} alt="" />
            </div>
        </div>
    );
};

export default HomeHeadLine;