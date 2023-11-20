import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AppliedJobList = () => {
    const SavedJob = useLoaderData()
    console.log(SavedJob)
    return (
        <div>
            
        </div>
    );
};

export default AppliedJobList;