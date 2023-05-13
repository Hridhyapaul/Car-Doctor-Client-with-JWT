import React from 'react';
import banner from '../../../assets/images/checkout/checkout.png'

const SmallBanner = () => {
    return (
        <div className='relative w-full'>
            <img src={banner} alt="" className='w-full object-cover' />
            <div className='absolute rounded-xl flex items-center h-full w-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]'>
                <h1 className='text-5xl font-bold text-white ml-20'>Service Details</h1>
            </div>
        </div>
    );
};

export default SmallBanner;