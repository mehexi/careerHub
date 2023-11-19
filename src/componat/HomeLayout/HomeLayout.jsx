import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import JobCatagory from '../JobCatagory/JobCatagory';
import FeaturedSection from '../layout/FeaturedSection/FeaturedSection';

const HomeLayout = () => {
    return (
        <>
            <HeroSection></HeroSection>
            <JobCatagory></JobCatagory>
            <FeaturedSection></FeaturedSection>
        </>
    );
};

export default HomeLayout;