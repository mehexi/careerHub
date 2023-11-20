import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import StaticsHeroSection from '../StaticsHeroSection/StaticsHeroSection';

const DetailsLayout = () => {
    // const JobDetails = useLoaderData()

    return (
        <>
            <StaticsHeroSection></StaticsHeroSection>
            <Outlet></Outlet>
        
        </>
    );
};

export default DetailsLayout;