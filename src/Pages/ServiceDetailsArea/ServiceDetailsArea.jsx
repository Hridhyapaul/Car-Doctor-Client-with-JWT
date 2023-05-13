import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SmallBanner from '../Shared/SmallBanner/SmallBanner';
import ServiceDetails from './ServiceDetails';

const ServiceDetailsArea = () => {
    const services = useLoaderData();
    return (
        <div>
            <SmallBanner></SmallBanner>
            <div className='grid grid-cols-4 gap-10 mt-20'>
                <div className='col-span-3'>
                    <ServiceDetails services={services}></ServiceDetails>
                </div>
                <div className='col-span-1'>
                    <h1>This is sidebar</h1>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsArea;