import React from 'react';
import FacilityCard from './FacilityCard';
import { Link } from 'react-router-dom';

const ServiceDetails = ({ services }) => {
    const { _id, title, description, facility, img, price } = services;
    return (
        <div className='space-y-10'>
            <img src={img} alt="" className='w-full rounded-lg' />
            <h1 className='text-4xl font-bold'>{title}</h1>
            <p>{description}</p>
            <div className='grid grid-cols-2 gap-20'>
                {
                    facility.map((singleFacility, index) => <FacilityCard key={index} singleFacility={singleFacility}></FacilityCard>)
                }
            </div>
            <div className='flex justify-start gap-14 items-center'>
                <h1 className='text-3xl font-bold'>Price: ${price}</h1>
                <Link to={`/checkout/${_id}`}><button className="btn bg-[#FF3811] border-0">Proceed Checkout</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetails;