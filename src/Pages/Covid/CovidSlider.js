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
import { Link } from 'react-router-dom';


const CovidSlider = () => {
    const sildes = [
        { img: service1 },
        { img: service2 },
        { img: service3 }
    ]
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
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
                                className="lg:h-[80vh] bg-cover bg-center bg-no-repeat text-white  "
                                style={{
                                    backgroundImage: `url(${slide.img})`,
                                }}


                            >
                                {/* <div className="bg-simple-2 h-full w-full lg:pt-32 p-5 lg:pl-20 ">
                            <div>
                                <h1 className="lg:text-5xl text-2xl">
                                    <p className="text-4xl text-orange-400 font-semibold">Cottage Home  </p>
                                    <p className="text-4xl mt-3 text-orange-400 font-semibold"> Care Service </p>

                                </h1>
                                <p className="py-3 text-sm md:text-xl md:w-3/6 ">

                                    The Right Home Care for You

                                    PCA & CDPAP Services throughout New York City
                                </p>
                                <Link to='/blog'>
                                    <button className="bg-gradient-to-r from-orange-400 to-red-400 font-semibold px-3 py-2 md:px-4 md:py-3 rounded-md">
                                        Contact Us
                                    </button>
                                </Link>
                            </div>
                        </div> */}

                                <div className='h-full w-full bg-simple py-3 '>
                                    <div className='  w-[95%] mx-auto mt-[25vh] lg:text-4xl text-2xl text-center text-white lobStar '>
                                        <p className='mt-2 '>

                                            The Step We are taking for the covid
                                        </p>
                                        <p className='mt-2'>to help you or a family member live at home</p>
                                        <p className='mt-2'>Contact us today! 516-367-2266</p>

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