import React from 'react';
import herosectionIMg from '../../assets/P3OLGJ1 copy 1.png'

const HeroSection = () => {
    return (
        <div className='flex justify-center align-middle items-center mt-[130px]'>
            <div className='flex flex-col gap-6'>
                <h1 className='font-bold text-7xl max-w-[570px] font-serif leading-[115%]'>One Step Closer to Your <span className='bg-gradient-to-tr from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text'>Dream Job</span></h1>
                <p className='text-[#757575] max-w-[700px]'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='font-bold text-xl text-white bg-gradient-to-tr from-[#7E90FE] to-[#9873FF] px-6 py-3 rounded-md w-fit'>Get started</button>
            </div>
            <div>
                <img src={herosectionIMg} alt="" />
            </div>
        </div>
    );
};

export default HeroSection;