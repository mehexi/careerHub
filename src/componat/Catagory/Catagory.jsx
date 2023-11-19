import React from 'react';

const Catagory = ({catagory}) => {
    return (
        <div className='flex flex-col gap-[32px] bg-blue-100/25 w-full p-10 rounded-xl'>
            <div>
            <img src={catagory.logo} alt="" />
            </div>
            
            <div className='flex flex-col gap-3'>
                <h1 className='text-xl font-semibold'>{catagory.category_name}</h1>
                <p>{catagory.availability}</p>
            </div>
        </div>
    );
};

export default Catagory;