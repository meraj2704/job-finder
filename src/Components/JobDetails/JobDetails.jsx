import React, { useContext } from 'react';
import { JobDetailsContext } from '../JobCart';
import { useLoaderData, useParams } from 'react-router-dom';
import PageBanner from '../PageBanner/PageBanner';

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);
    const job = jobs.find(job => job.id === intId);
    const {salary,jobName,phone,location,email,details,responsibilities,education,experience} = job;
    const pageName = 'Job Details';
    // console.log(job);
    return (
        <div>
            <PageBanner
                pageName={pageName}
            ></PageBanner>
            <div className='flex'>
                <div className='flex-1'>
                    <p className='mt-6'><span className='font-bold'>Job Details:</span> {details}</p>
                    <p className='mt-6'><span className='font-bold'>Job Responsibilities:</span> {responsibilities}</p>
                    <p className='mt-6'><span className='font-bold'>Education:</span> {education}</p>
                    <p className='mt-6'><span className='font-bold'>Experience: </span>{experience}</p>
                </div>
                <div className='flex-3'>
                    <div>
                    <h1>Job Details</h1>
                    <p><span>Salary:</span> {salary}</p>
                    <p><span>Job Title:</span> {jobName}</p>
                    <h1>Contact Information</h1>
                    <p><span>Phone:</span> {phone}</p>
                    <p><span>Email:</span> {email}</p>
                    </div>
                    <div>
                        <button></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;