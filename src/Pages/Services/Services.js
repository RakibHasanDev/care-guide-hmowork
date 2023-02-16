import React, { useEffect, useState } from 'react';
import './Services.css'
import { Link } from 'react-router-dom';

import contact from '../../../src/Assests/contact.jpg'
import topImg from '../../../src/Assests/home-services-01.jpg'
import ServiceCard from './ServiceCard';


const Services = () => {

    const [services , setServices] = useState([])

    useEffect( ()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    } ,[])

    console.log(services)

    return (
        <div className='min-h-screen openSans md:w-[85%] w-[95%]  mx-auto pb-10'>
            <div className='md:grid grid-cols-7 gap-8 '>

               <div className='col-span-2 mt-5'>
               <div className='bg-[#0F4E66] p-6  text-white order-2 md:order-none rounded-md'>
                    <p className='font-semibold text-xl'>Available 24 Hours </p>

                    <img src={contact} alt="" className='w-full mt-2 rounded-sm' />

                    <p className='mt-3 '>
                        If you have a question about our themes, please feel free to contact us!
                    </p>

                    <p className='mt-2'>
                        info@cottagehomecare.com
                    </p>

                    <p className='mt-8'>
                    Our support Hotline is available 24 Hours a day: 
                    </p>
                    <p>
                    Tel: 516-367-2266
                    </p>

                </div>
               </div>

                <div className='mt-5 col-span-5 order-1'>
                    <Link to='/home' className='mr-3 text-gray-700 font-semibold'>
                    Home
                    </Link>
                    /
                    <Link to='/services' className='ml-3 text-gray-700 font-semibold'>
                    Service
                    </Link>

                    <div className='mt-3 order-1 '>
                        <p className='text-4xl text-[#0F4E66]'>
                           Services 
                        </p>
                        <img src={topImg} alt="" className='mt-2  md:h-[430px] w-full rounded-md' />
                    </div>

                    <p className='text-sm mt-2 font-semibold'>
                    Cottage Home Care Service offers comprehensive care solutions to make our clients safe and independent:
                    </p>

                    <ul className='pl-4 mt-2'>
                        <li className='list-disc'>HHA </li>
                        <li className='list-disc'> PCA </li>
                        <li className='list-disc'>CDPAP </li>
                    </ul>


                </div>



            </div>
            <div>
            <h1 className='mt-8 mb-2 text-gray-600 font-semibold text-3xl'>Details Of Our Services </h1>
            <hr className='lg:w-[25%] md:w-[50%] w-[75%] border-2 border-[#0F4E66]' />
            <div className='grid md:grid-cols-2 lg:grid-cols-3  gap-8 mt-3'>
               
                {
                    services.map((service, index) => <ServiceCard
                    key={index}
                    service={service}
                    >



                    </ServiceCard> )
                }



            </div>

            </div>
            
        </div>
    );
};

export default Services;