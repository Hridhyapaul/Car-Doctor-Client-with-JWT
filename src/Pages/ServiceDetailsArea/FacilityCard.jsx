import React from 'react';

const FacilityCard = ({ singleFacility }) => {
    const {name, details} = singleFacility;
    return (
        <div className='col-span-1'>
            <div className="card w-96 border-t-4 border-[#FF3811] bg-[#F3F3F3]">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                </div>
            </div>
        </div>
    );
};

export default FacilityCard;