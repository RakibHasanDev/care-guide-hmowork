import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './CovidSlider.css'

// import required modules
import { Pagination } from "swiper";

import service1 from '../../../src/Assests/covid-1.jpeg'
import service2 from '../../../src/Assests/covid-2.jpg'
import service3 from '../../../src/Assests/covid-3.jpg'



const CovidSlider = () => {
    const sildes = [
        { img: service1 },
        { img: service2 },
        { img: service3 }
    ]
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) +  "</span>";
        },
    };
    return (
        <>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    sildes.map((slide, i) =>
                        <SwiperSlide className='relative ' key={i}>
                            {/* <img className='mx-auto slide-img' src={slide.img} alt="" /> */}
                            <div
                                className="lg:h-[70vh] h-[50vh] bg-cover bg-center bg-no-repeat text-white  "
                                style={{
                                    backgroundImage: `url(${slide.img})`,
                                }}

                            >
                               

                                <div className='h-full w-full bg-simple-2 py-3 '>
                                    <div className='md:w-[95%] mx-auto mt-[20vh] lg:text-4xl text-xl text-center text-white lobStar '>
                                        <p className='mt-2 '>

                                            Keep a daily routine, such as taking a shower and getting dressed
                                        </p>
                                        <p className='mt-2'>Take breaks from COVID-19 news and social media.</p>
                                        <p className='mt-2'>Stay physically active</p>

                                    </div>

                                </div>
                            </div>

                        </SwiperSlide>)
                }


            </Swiper>
        </>
    );
};

export default CovidSlider;