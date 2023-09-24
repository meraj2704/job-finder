import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import PageBanner from '../PageBanner/PageBanner';
import Footer from '../Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobApplication } from '../utilities/localstorage';
import DisplayApplied from '../DisplayApplied/DisplayApplied';
// import AppliedJob from '../AppliedJoob/AppliedJob.1';

const Applied = () => {
    const pageName = 'Applied Jobs';
    const jobs = useLoaderData();
    // const [newJobs, setNewJobs] = useState(jobs);
    // console.log(newJobs);
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobFilter = (filter) => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.type === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(job => job.type === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }
    useEffect(() => {
        const storeJobsIds = getStoredJobApplication();
        // console.log(storeJobsIds);
        if (jobs.length > 0) {
            const jobsApplied = [];
            for (const id of storeJobsIds) {
                const job = jobs.find(job => job.id === id);

                if (job) {
                    jobsApplied.push(job);
                }
            }
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
        }
    }, [jobs])
    return (
        <div>
            <PageBanner
                pageName={pageName}
            ></PageBanner>
            <section>
                <h2>Applied Jobs : {displayJobs.length}</h2>
                <details className='dropdown mb-32'>
                    <summary className='m-1 btn'>Filter By</summary>
                    <ul className='p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 cursor-pointer'>
                        <li onClick={() => handleJobFilter('all')}><a>All</a></li>
                        <li onClick={() => handleJobFilter('remote')}><a>Remote</a></li>
                        <li onClick={() => handleJobFilter('onsite')}><a>Onsite</a></li>
                    </ul>
                </details>
                    <div className='grid grid-cols-2 items-center justify-center'>
                        {
                           displayJobs.map(disApplied => <DisplayApplied
                           key={disApplied.id}
                           disApplied={disApplied}
                           ></DisplayApplied>)
                        }
                    </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Applied;