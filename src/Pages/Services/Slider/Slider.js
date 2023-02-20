import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper";
import { Link } from "react-router-dom";
export default function Slider() {
    return (
        <>
            <Swiper
                pagination={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div
                        className="lg:h-[500px] bg-cover bg-center bg-no-repeat text-white rounded-xl "
                        style={{
                            backgroundImage: `url(${"https://i.ibb.co/X7Q1dXx/PCA.jpg"})`,
                        }}


                    >
                        <div className="bg-gradient-to-r from-black to-transparent h-full w-full lg:pt-32 p-5 lg:pl-20 rounded-xl">
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
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div
                        className="lg:h-[500px] bg-cover bg-center bg-no-repeat text-white rounded-xl "
                        style={{
                            backgroundImage: `url(${"https://i.ibb.co/m07qRDL/CDPAP.jpg"})`,
                        }}


                    >
                        <div className="bg-gradient-to-r from-black to-transparent h-full w-full lg:pt-32 p-5 lg:pl-20 rounded-xl">
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
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div
                        className="lg:h-[500px] bg-cover bg-center bg-no-repeat text-white rounded-xl "
                        style={{
                            backgroundImage: `url(${"https://i.ibb.co/fnMwYyD/HHA.jpg"})`,
                        }}


                    >
                        <div className="bg-gradient-to-r from-black to-transparent h-full w-full lg:pt-32 p-5 lg:pl-20 rounded-xl">
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
                        </div>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </>
    );
}