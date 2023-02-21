import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Lottie from 'lottie-react'
import reader from '../../../../src/Assests/107800-login-leady.json'



const SingleContacts = () => {
    window.scrollTo(0, 0);

    const singContact = useLoaderData();
   

    const{ Hours,address,map,office } = singContact
    return (
        <div className='min-h-screen py-10 w-11/12 mx-auto'>
            

            <div className='grid md:grid-cols-2 gap-8 mt-5 bg-[#F6F6F6] py-10 shadow-lg'
            data-aos="fade-right" data-aos-duration='2000'>

                <div className='text-center'>
                <figure className='rounded-2xl '>
                <iframe src={map} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-[90%] mx-auto h-[60vh] m-1 border-4 border-[#F6F6F6] shadow-xl '></iframe>

            </figure>
                </div>
                <div className='p-4' >
                <h1 className='text-3xl text-center my-10 text-[#F76600] font-semibold'>{office}</h1>
                <p className='text-2xl font-semibold'>
                Better yet, see us in person!
                </p>
                <p className='mt-2'>
                We love our customers, so feel free to visit during normal business hours
                </p>
                <p className='text-2xl mt-6 font-semibold'>
                    Cottage Home Care
                </p>
                <p className='mt-2'>
                   <span className='font-semibold'>Address:</span> {address}
                </p>

                    <p className='mt-6 text-2xl font-semibold'>
                        Hours
                    </p>
                <div className="dropdown dropdown-top ">
                    <label tabIndex={0} className=" cursor-pointer"> Open today <span className='text-orange-400'>09:00 am – 05:00 pm</span>

                    </label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            Hours.map((hour, index) => <li
                                key={index}
                                className='z-auto py-1 px-1 '

                            >



                                {hour}
                            </li>)
                        }
                    </ul>
                </div>
                </div>

                
                


            </div>

            <div >
                <div className="grid  grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-[#F6F6F6] dark:text-gray-100 mt-10 shadow-lg" data-aos="fade-left" data-aos-duration='2000'>
                    <div className="flex flex-col justify-between">
                        <div className="space-y-2">
                            <h2 className="text-4xl font-bold leading-tight lg:text-5xl text-orange-400">Let's talk!</h2>
                            <div className="text-gray-600 font-semibold"> For Any Query please Contact With Us</div>
                        </div>

                        <Lottie animationData={reader} loop={true} className=' h-52 md:h-64  rounded-lg  ' />
                    </div>
                    <form novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                        <div>
                            <label for="name" className="text-sm">Full name</label>
                            <input id="name" type="text" placeholder="" className="w-full p-3 rounded " />
                        </div>
                        <div>
                            <label for="email" className="text-sm">Email</label>
                            <input id="email" type="email" className="w-full p-3 rounded dark:bg-gray-800" />
                        </div>
                        <div>
                            <label for="message" className="text-sm">Message</label>
                            <textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-800"></textarea>
                        </div>
                        <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-gradient-to-r from-orange-400 to-red-400 text-white">Send Message</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default SingleContacts;