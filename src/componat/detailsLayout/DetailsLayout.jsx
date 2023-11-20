import React from 'react';
import { Outlet} from 'react-router-dom';
import StaticsHeroSection from '../StaticsHeroSection/StaticsHeroSection';

const DetailsLayout = () => {
    

    return (
        <>
            <StaticsHeroSection></StaticsHeroSection>
            <Outlet></Outlet>
        
        </>
    );
};

export default DetailsLayout;