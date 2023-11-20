import React from 'react';

const StaticsHeroSection = ({text}) => {
    return (
        <div className='w-full bg-gradient-to-tr from-[#7E90FE]/5 to-[#9873FF]/5 grid '>
            <div className='ml-auto'>
                <img className='rotate-180' src="/src/assets/Vector.png" alt="" />
            </div>
            <h1 className='text-center text-5xl font-semibold'>{text}</h1>
            <div>
                <img src="/src/assets/Vector.png" alt="" />
            </div>
        </div>
    );
};

export default StaticsHeroSection;