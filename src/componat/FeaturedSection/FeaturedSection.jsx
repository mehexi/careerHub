import React, { useEffect, useState } from 'react';
import ShowJob from '../ShowJob/ShowJob';

import { faArrowUp} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FeaturedSection = () => {
    const [jobs, setjobs] = useState([])
    useEffect(() => {
        fetch('/public/jobs.json')
            .then(res => res.json())
        .then(data=> setjobs(data))
    }, [])
    
    const [showJobs, setShowJobs] = useState(false)
    const displyedJobs = showJobs ? jobs : jobs.slice(0,4)

    const toggleJobs = () => {
        setShowJobs(showJobs => !showJobs)
    }

    return (
        <section className='mt-[130px] flex flex-col gap-8'>
            <div className='text-center flex flex-col gap-6'>
                <h1 className='font-poppins text-5xl font-semibold'>
                Featured Jobs
                </h1>
                <p>
                Explore thousands of job opportunities with all the information you need. Its your future
                </p>
            </div>
            <div className='grid grid-cols-2 gap-6'>
            {
                displyedJobs.map(job=><ShowJob key={job.id} job={job}></ShowJob>)
                }
            </div>
            <button className='px-6 py-3 rounded-full border w-fit text-blue-500 border-blue-500 mx-auto' onClick={toggleJobs}><FontAwesomeIcon className={showJobs? 'rotate-0 duration-200': 'rotate-180 duration-200'} icon={faArrowUp}/> {showJobs? 'Show less':'Show all'}</button>
        </section>
    );
};

export default FeaturedSection;