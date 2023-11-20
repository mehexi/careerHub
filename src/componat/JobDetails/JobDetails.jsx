import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const JobDetails = useLoaderData()

    return (
        <div>
            <h1>{JobDetails[0].id}</h1>
        </div>
    );
};

export default JobDetails;