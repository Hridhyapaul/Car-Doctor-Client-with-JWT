import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const {_id ,title, img, price } = service;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl px-0">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl h-60 object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{title}</h2>
                    <div className='flex justify-between items-center'>
                        <p className='text-md font-bold text-[#FF3811]'>Price: {price}</p>
                        <Link to={`serviceDetails/${_id}`}><button><FaArrowRight className='text-[#FF3811]'></FaArrowRight></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;