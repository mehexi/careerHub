import React from 'react';
import { Outlet} from 'react-router-dom';
import StaticsHeroSection from '../StaticsHeroSection/StaticsHeroSection';

const DetailsLayout = ({text}) => {
    

    return (
        <>
            <StaticsHeroSection text={text}></StaticsHeroSection>
            <Outlet></Outlet>
        
        </>
    );
};

export default DetailsLayout;