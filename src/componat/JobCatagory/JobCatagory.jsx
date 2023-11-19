import React, { useEffect, useState } from 'react';
import Catagory from '../Catagory/Catagory';

const JobCatagory = () => {
    const [catagories, setcatagory] = useState([])
    useEffect(() => {
        fetch("/public/catagories.json")
        .then(res => res.json())
        .then(data => setcatagory(data))
    }, [])
    
    return (
        <section className='mt-[130px] flex flex-col gap-8'>
            <div className='text-center flex flex-col gap-6'>
                <h1 className='font-poppins text-5xl font-semibold'>
                    Job Catagory List
                </h1>
                <p>
                Explore thousands of job opportunities with all the information you need. Its your future
                </p>
            </div>
            <div className='flex justify-evenly gap-10'>
            {
                catagories.map(catagory => <Catagory key={catagory.id} catagory={catagory}></Catagory>)
            }
            </div>
        </section>
    );
};

export default JobCatagory;