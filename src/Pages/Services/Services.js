import React, { useEffect, useState } from 'react';
import './Services.css'
import contact from '../../../src/Assests/customer Support.png'
import ServiceCard from './ServiceCard';
import Slider from './Slider/Slider';


const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    console.log(services)

    return (
        <div className='min-h-screen openSans md:w-[85%] w-[95%]  mx-auto pb-10'>
            <div className='md:grid grid-cols-7 gap-8 '>

                <div className='col-span-2 mt-5'>
                    <div className='shadow-xl bg-[#0F4E66] p-5  text-white order-2 md:order-none rounded-md' data-aos="fade-down" data-aos-duration='2000'>
                        <p className=' text-xl font-semibold'>Available 24/7 Hours </p>

                        <img src={contact} alt="" className='w-full mt-2 rounded-md' />

                        <p className='mt-3  '>
                            If you have a question about our service, please feel free to contact us!
                        </p>

                        <p className='mt-2'>
                            info@cottagehomecare.com
                        </p>

                        <p className='mt-8'>
                            Our support Hotline is available 24/7 Hours a day:
                        </p>
                        <p>
                            Tel: 516-367-2266
                        </p>

                    </div>
                </div>

                <div className='mt-5 col-span-5 order-1' data-aos="fade-left" data-aos-duration='2000'>
                    {/* <Link to='/home' className='mr-3 text-gray-700 font-semibold'>
                        Home
                    </Link>
                    /
                    <Link to='/services' className='ml-3 text-gray-700 font-semibold'>
                        Service
                    </Link>

                    <div className='mt-3 order-1 '>
                        <p className='text-4xl text-[#164273]'>
                            Services
                        </p>
                        <img src={topImg} alt="" className='mt-2  md:h-[430px] w-full rounded-md' />
                    </div>

                    <p className='text-sm mt-2 font-semibold text-gray-800'>
                        Cottage Home Care Service offers comprehensive care solutions to make our clients safe and independent:
                    </p>

                    <ul className='pl-4 mt-2 text-gray-800 font-semibold'>
                        <li className='list-disc'>HHA </li>
                        <li className='list-disc'> PCA </li>
                        <li className='list-disc'>CDPAP </li>
                    </ul> */}

                        <Slider></Slider>
                </div>



            </div>
            <div>
                <h1 className='mt-8 mb-2 text-gray-800 font-semibold text-3xl'>Details Of Our Services </h1>
                <hr className='lg:w-[25%] md:w-[50%] w-[75%] border-2 border-[#FB903F]' />
               

                
                <div className='grid md:grid-cols-2 lg:grid-cols-3 lg:w-[95%] mx-auto gap-8 mt-3'>

                    {
                        services.map((service, index) => <ServiceCard
                            key={index}
                            service={service}
                        >



                        </ServiceCard>)
                    }



                </div>

            </div>

        </div>
    );
};

export default Services;