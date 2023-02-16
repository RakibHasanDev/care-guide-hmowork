import React from 'react';
import { Link } from 'react-router-dom';

import contact from '../../../src/Assests/contact.jpg'


const Services = () => {
    return (
        <div className='min-h-screen '>
            <div className='md:w-[85%] w-[95%]  mx-auto md:grid grid-cols-7 gap-8 '>

                <div className='bg-[#0F4E66] p-6 col-span-2 mt-5 text-white'>
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

                <div className='mt-5'>
                    <Link to='/home' className='mr-3 text-gray-700'>
                    Home
                    </Link>
                    /
                    <Link to='/services' className='ml-3 text-gray-700'>
                    Service
                    </Link>


                </div>



            </div>
        </div>
    );
};

export default Services;