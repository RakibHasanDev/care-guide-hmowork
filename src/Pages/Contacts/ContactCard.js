import React from 'react';
import { Link } from 'react-router-dom';

import { ImLocation2 } from 'react-icons/im';

const ContactCard = ({ contact }) => {

    const { office, address, Hours, map,id } = contact
    return (
        <div className="card card-side shadow-2xl bg-[#F6F6F6] lg:w-[75%] mx-auto mt-5" data-aos="zoom-in-up" data-aos-duration="1000">
            <figure>
                <iframe src={map} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className=' lg:w-[500px]  h-64 m-1 border-4 border-[#F6F6F6]'></iframe>

                

            </figure>
            <div className="card-body space-y-1">
                <h2 className="text-2xl font-semibold text-[#F6811C]">{office}</h2>
                <div className='flex gap-2 items-center'>
                    <div>
                        <ImLocation2 className='font-semibold text-xl text-[#F6811C]  ' />
                    </div>
                    <div>
                        <p>{address}</p>
                    </div>
                    </div>
                

                <div className="dropdown dropdown-top">
                    <label tabIndex={0} className=" cursor-pointer"> Open today <span className='text-orange-400'>09:00 am – 05:00 pm</span>

                    </label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            Hours.map((hour, index) => <li
                                key={index}
                                className='z-auto'

                            >



                                {hour}
                            </li>)
                        }
                    </ul>
                </div>


                <div className="card-actions justify-end">
                   <Link  to={`/contacts/${id}`} >
                   <button className="btn bg-[#F6811C]">See More</button>
                   
                   </Link>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;