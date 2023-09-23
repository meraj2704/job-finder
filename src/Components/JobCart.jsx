import React, { useContext } from 'react';
import { JobsContext } from './Home/Home';
import loca from '../assets/Frame.png';
import money from '../assets/Frame1.png';


const JobCart = ({ job }) => {
    const [appliedJobs, setAppliedJobs] = useContext(JobsContext);
    const { image, jobName, company, type, time, location, salary, details } = job;
    return (
            <div className='border border-solid border-[#828282] p-10 w-[400px] h-[400px] rounded-xl'>
                <img className='mb-9 h-10 object-cover w-[120px]' src={image} alt="" />
                <h1 className='text-2xl font-extrabold '>{jobName}</h1>
                <p className='mb-2'>{company}</p>
                <div className='mb-4'>
                    <button className='px-[19px] border border-solid border-[#7E90FE] text-[#7E90FE] '>{type}</button><button className='px-[19px] border border-solid border-[#7E90FE] text-[#7E90FE] '>{time}</button>
                </div>
                <p className='flex mb-9'><span className='flex mr-2'><img src={loca} alt="" /> {location}</span> <span className='flex'><img src={money} alt="" />{salary}</span></p>
                <div className=''>
                    <button className='btn mr-6'>View Details</button> 
                    <button className='btn'>Apply Now</button>
                </div>
            </div>
    );
};

export default JobCart;