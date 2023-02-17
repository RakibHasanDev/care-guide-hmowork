import React, { useEffect, useState } from 'react';
import './contact.css'

const Contacts = () => {

    const [contacts, setContacts] = useState([])

    useEffect(()=>{
        fetch('contacts.json')
        .then(res=>res.json())
        .then(data=>setContacts(data))

    },[])

    console.log(contacts)

    return (

        <div className='pb-10'>
            <div className='min-h-screen -mt-[82px]'>
                <div className=' bg-contact '>
                    <div className='h-full w-full bg-simple py-3 '>
                        <div className='  w-[95%] mx-auto mt-[25vh] lg:text-4xl text-2xl text-center text-white lobStar '>
                            <p className='mt-2 '>

                                Welcome Cottage Home Care Service
                            </p>
                            <p className='mt-2'>to help you or a family member live at home</p>
                            <p className='mt-2'>Contact us today! 516-367-2266</p>

                        </div>

                    </div>
                </div>

            </div>

            <div className=' -mt-24'>
                <h1 className='text-center text-[#F6811C] text-3xl font-semibold crimson'> Contact Us With The Following Address </h1>
                <div className='grid grid-cols-2 gap-7 w-11/12 mx-auto mt-8'>

                    {
                        
                    }

                  



                </div>
            </div>



        </div>



    );
};

export default Contacts;