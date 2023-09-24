import React from 'react';
import loca from '../../assets/Frame.png';
import money from '../../assets/Frame1.png';

const DisplayApplied = ({ disApplied }) => {
    const { id, image, jobName, company, type, time, location, salary, details } = disApplied;
    return (
        <div className='container mx-auto mb-6'>
            <div className='flex items-center justify-center gap-x-8'>
                <div className='w-60 h-60 bg-[#F4F4F4] flex justify-center items-center'>
                    <img className='w-[145px] h-[50px] ' src={image} alt="" />
                </div>
                <div className='w-[315px]'>
                    <h1 className='text-3xl font-extrabold mb-2'>{jobName}</h1>
                    <p className='text-3xl text-[#757575] mb-6'>{company} </p>
                    <p className='mb-6'>
                        <button className='px-[19px] border border-solid border-[#7E90FE] text-[#7E90FE] '>{type}</button><button className='px-[19px] border border-solid border-[#7E90FE] text-[#7E90FE] '>{time}</button>
                    </p>
                    <p className='flex mb-9'><span className='flex mr-2'><img src={loca} alt="" /> {location}</span> <span className='flex'><img src={money} alt="" />{salary}</span></p>
                </div>
            </div>
        </div>
    );
};

export default DisplayApplied;