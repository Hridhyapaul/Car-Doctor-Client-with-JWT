import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl h-60 object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{title}</h2>
                    <div className='flex justify-between items-center'>
                        <p className='text-md font-bold text-[#FF3811]'>Price: {price}</p>
                        <FaArrowRight className='text-[#FF3811]'></FaArrowRight>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;