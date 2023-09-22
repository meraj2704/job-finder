import React, { useContext } from 'react';
import { JobsContext } from './Home/Home';

const JobCart = ({job}) => {
    const [appliedJobs,setAppliedJobs] = useContext(JobsContext);
    const {image,jobName,company,type,time,location,salary,details} = job;
    return (
        <div>
            <div>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default JobCart;