import React, { useContext } from 'react';
import { JobDetailsContext } from '../JobCart';
import { useLoaderData, useParams } from 'react-router-dom';
import PageBanner from '../PageBanner/PageBanner';
import Footer from '../Footer/Footer';
import { saveJobApplication } from '../utilities/localstorage';
import dolar from '../../assets/Frame1.png'
import loc from '../../assets/Frame.png'
import title from '../../assets/title.png'
import call from '../../assets/call.png'
import mail from '../../assets/email.png'

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);
    const job = jobs.find(job => job.id === intId);
    const { salary, jobName, phone, location, email, details, responsibilities, education, experience } = job;
    const pageName = 'Job Details';
    const handleJob = () => {
        saveJobApplication(intId);
    }
    // console.log(job);
    return (
        <div>
            <PageBanner
                pageName={pageName}
            ></PageBanner>
            <div className='container mx-auto flex my-32 gap-x-6'>
                <div className='flex-1'>
                    <p className='mt-6'><span className='font-bold'>Job Details:</span> {details}</p>
                    <p className='mt-6'><span className='font-bold'>Job Responsibilities:</span> {responsibilities}</p>
                    <p className='mt-6'><span className='font-bold'>Education:</span> {education}</p>
                    <p className='mt-6'><span className='font-bold'>Experience: </span>{experience}</p>

                </div>
                <div className='flex-2 '>
                    <div className='bg4 p-7 mb-6 rounded'>
                        <h1 className='font-extrabold text-xl'>Job Details</h1>
                        <div className='w-full border-t bg3 border-sky-600 my-6'>
                        </div>
                        <p className='mb-4 flex gap-x-1'> 
                            <img src={dolar} alt="" />
                            <span className='font-bold'>Salary:</span> {salary}</p>
                        <p className='flex gap-x-1'>
                            <img src={title} alt="" />
                            <span className='font-bold'>Job Title:</span> {jobName}</p>
                        <h1 className='font-extrabold text-xl mt-8'>Contact Information</h1>
                        <div className='w-full border-t bg3 border-sky-600 my-6'>
                        </div>
                        <p className='mb-4 flex gap-x-1'>
                            <img src={call} alt="" />
                            <span className='font-bold'>Phone:</span> {phone}</p>
                        <p className='mb-4 flex gap-x-1'>
                            <img src={mail} alt="" />
                            <span className='font-bold'>Email:</span> {email}</p>
                        <p className='mb-4 flex gap-x-1'>
                            <img src={loc} alt="" />
                            <span className='font-bold'>Address:</span> {phone}</p>
                    </div>
                    <div>
                        <button onClick={handleJob} className='btn w-full'>Apply Now</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default JobDetails;