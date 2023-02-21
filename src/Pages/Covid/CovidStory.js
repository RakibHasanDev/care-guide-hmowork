import React from 'react';
import { Link } from 'react-router-dom';

import story1 from '../../../src/Assests/covid-story-1.jpeg'
import story2 from '../../../src/Assests/covid-story-2.jpg'

const CovidStory = () => {

    const steps = [
        {
            step: 'Keep a daily routine, such as taking a shower and getting dressed.'
        },
        {
            step: 'Take breaks from COVID-19 news and social media.'
        },
        {
            step: 'Eat healthy meals and drink plenty of fluids.'
        },
        {
            step: 'Stay physically active.'
        },
        {
            step: 'Get plenty of sleep.'
        },
        {
            step: 'Avoid use of drugs, tobacco and alcohol.'
        }

    ]
    return (
        <div className='my-10  '>
            <h1 className='w-[60%] mx-auto text-2xl text-orange-500 text-center openSans font-bold'>
                The Story How We Faught Covid-19

            </h1>
            <div className='bg-[#F6F6F6]'>

                <div className='grid md:grid-cols-2 gap-5 mt-10 w-11/12 mx-auto p-6 items-center' data-aos="fade-left" data-aos-duration='2000'>

                    <div>

                        <img src={story2} alt="" className='h-96 rounded-md shadow-lg p-5' />

                    </div>
                    <div className=' p-4'>

                        <h1 className='text-2xl font-semibold  text-gray-700'>
                            Our Response.
                        </h1>
                        <p className='pt-3 text-gray-600'>
                            The safety of our employees and our clients at Cottage Home Care Services is our priority. As the Coronavirus (COVID-19) pandemic continues, we are monitoring the situation closely and following the guidance from the Centers for Disease Control and Prevention and local health authorities.
                        </p>

                        <a href='https://www.cdc.gov/coronavirus/2019-ncov/index.html' target='_blank' className='btn bg-primary px-5 py-4 mt-8 text-white hover:bg-secondary' >
                            Find Out More
                        </a>
                    </div>


                </div>
            </div>
            <div className='bg-[#F6F6F6] my-20'>

                <div className='grid md:grid-cols-2 gap-5  w-11/12 mx-auto p-6 items-center' data-aos="fade-right" data-aos-duration='2000'>

                    
                    <div className=' p-4'>

                        <h1 className='text-2xl mb-3 font-semibold  text-gray-700'>
                            The Action We Took
                        </h1>
                       {
                        steps.map((step,index)=> <ol 
                            key={index}
                            className='ml-4 '
                        >
                            <li className='list-disc py-1 '>
                                {step.step}
                            </li>


                        </ol>)
                       }
                        
                        
                        <Link to='/services' className='btn bg-primary px-5 py-4 mt-8 text-white hover:bg-secondary' >
                            Our Services
                        </Link>
                    </div>
                    <div>

                        <img src={story1} alt="" className='h-96 rounded-md shadow-lg p-5 mx-auto' />

                    </div>


                </div>
            </div>



        </div>
    );
};

export default CovidStory;