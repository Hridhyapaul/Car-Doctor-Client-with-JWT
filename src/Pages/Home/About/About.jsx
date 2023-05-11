import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div>
            <div className="hero mt-20 mb-32 bg-white">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-1/2 relative'>
                        <img src={person} className="w-[80%] rounded-lg" />
                        <img src={parts} className="w-[60%] rounded-lg absolute top-44 right-9 border-8 border-white" />
                    </div>
                    <div className='w-1/2'>
                        <p className='font-semibold text-[#4406CB] text-xl'>About Us</p>
                        <h1 className="text-5xl font-bold mt-2">Box Office News!</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. <br /> <br />

                            the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </p>
                        <button className="btn btn-primary">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;