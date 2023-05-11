import React from 'react';
import image1 from '../../../assets/images/banner/1.jpg'
import image2 from '../../../assets/images/banner/2.jpg'
import image3 from '../../../assets/images/banner/3.jpg'
import image4 from '../../../assets/images/banner/4.jpg'
import image5 from '../../../assets/images/banner/5.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] object-cover">
            {/* Slider--01 */}
            <div id="slide1" className="carousel-item relative w-full">
                <img src={image1} className="w-full rounded-md object-cover" />
                <div className="absolute rounded-md flex items-center h-full w-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='space-y-8 w-[550px] pl-12'>
                        <h1 className='text-white font-bold text-6xl'>Affordable Price For Car Servicing</h1>
                        <p className='text-white'>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                        <div className='flex justify-start items-center gap-5'>
                            <button className="btn btn-primary ">Discover More</button>
                            <button className="btn btn-outline btn-error">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            {/* Slider--02 */}
            <div id="slide2" className="carousel-item relative w-full">
                <img src={image2} className="w-full rounded-md object-cover" />
                <div className="absolute rounded-md flex items-center h-full w-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='space-y-8 w-[550px] pl-12'>
                        <h1 className='text-white font-bold text-6xl'>Affordable Price For Car Servicing</h1>
                        <p className='text-white'>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                        <div className='flex justify-start items-center gap-5'>
                            <button className="btn btn-primary ">Discover More</button>
                            <button className="btn btn-outline btn-error">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            {/* Slider--03 */}
            <div id="slide3" className="carousel-item relative w-full">
                <img src={image3} className="w-full rounded-md object-cover" />
                <div className="absolute rounded-md flex items-center h-full w-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='space-y-8 w-[550px] pl-12'>
                        <h1 className='text-white font-bold text-6xl'>Affordable Price For Car Servicing</h1>
                        <p className='text-white'>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                        <div className='flex justify-start items-center gap-5'>
                            <button className="btn btn-primary ">Discover More</button>
                            <button className="btn btn-outline btn-error">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            {/* Slider--04 */}
            <div id="slide4" className="carousel-item relative w-full">
                <img src={image4} className="w-full rounded-md object-cover" />
                <div className="absolute rounded-md flex items-center h-full w-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='space-y-8 w-[550px] pl-12'>
                        <h1 className='text-white font-bold text-6xl'>Affordable Price For Car Servicing</h1>
                        <p className='text-white'>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                        <div className='flex justify-start items-center gap-5'>
                            <button className="btn btn-primary ">Discover More</button>
                            <button className="btn btn-outline btn-error">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            {/* Slider--05 */}
            <div id="slide5" className="carousel-item relative w-full">
                <img src={image5} className="w-full rounded-md object-cover" />
                <div className="absolute rounded-md flex items-center h-full w-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='space-y-8 w-[550px] pl-12'>
                        <h1 className='text-white font-bold text-6xl'>Affordable Price For Car Servicing</h1>
                        <p className='text-white'>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                        <div className='flex justify-start items-center gap-5'>
                            <button className="btn btn-primary ">Discover More</button>
                            <button className="btn btn-outline btn-error">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;