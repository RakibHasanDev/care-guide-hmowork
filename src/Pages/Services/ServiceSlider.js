import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";


import brand from '../../../src/Assests/Cottage Home.png'

const ServiceSlider = () => {
    const sildes = [
        {img:"https://i.ibb.co/0nCT2sg/DSC03149.jpg",
        name:"HHA / PCA",
        description: "This service will allow us to send a professionally trained and certified home health aide to take care of family or loved ones, leaving you worry-free and with peace of mind.",
        text:'COTTAGE HOME CARE SERVICES - THE RIGHT HOME CARE FOR YOU ',brand},

        {img:"https://i.ibb.co/C5B27Zf/DSC03111-1.jpg",
        name: "CDPAP",
        description : "This service allows us to directly pay you or a friend to take care of your own loved ones, allowing them to be reimbursed for their hard work!",
        text:'COTTAGE HOME CARE SERVICES - THE RIGHT HOME CARE FOR YOU ',brand}
    ]
    // const pagination = {
    //     clickable: true,
    //     renderBullet: function (index, className) {
    //       return '<span class="' + className + '">' + (index + 1) + "</span>";
    //     },
    //   };
    return (
        <>
        <Swiper
           pagination={true}
           autoplay={{
               delay: 4000,
               disableOnInteraction: false,
           }}
           loop={true}
           modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper
          mt-10"
        >
            {
                sildes.map((slide,i)=><SwiperSlide className='relative ' key={i}>
                    <div className='grid md:grid-cols-2 gap-7 p-8 bg-[#F6F6F6] items-center rounded-lg shadow-lg'>
                        <div>
                        <img className='mx-auto slide-img rounded-md' src={slide.img} alt="" />
                        </div>

                        <div className='mx-auto'>
                            <div className='w-[70%] mx-auto'>
                            <p className='text-primary font-semibold
                             text-2xl'>{slide.name}</p>

                             <p className='mt-3'>
                                {slide.description}
                             </p>
                            </div>

                        </div>

                    </div>
                    
                    <div className='px-2  '>
                        
                      
                    </div>
                </SwiperSlide>)
            }
          
          
        </Swiper>
      </>
    );
};

export default ServiceSlider;