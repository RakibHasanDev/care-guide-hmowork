import React from 'react';

import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter} from 'react-icons/ai';
import { FaGooglePlusG} from 'react-icons/fa';
import { BsYoutube} from 'react-icons/bs';

const TopHeader = () => {
    return (
        <div className='bg-[#F6811C] py-4 '>
          <div className='w-[95%] md:w-11/12 mx-auto flex justify-between'>
         <div className='flex gap-5 items-center '>
         <div>
             <p className='flex gap-1.5 text-white items-center '> <BsFillTelephoneFill/> 516-367-2266 </p>
            </div>
                
            <div>
            <p className='flex items-center  text-white gap-1'> <IoMdMail/> info@cottagehomecare.com </p>
            </div>
         </div>
            <div className='flex items-center gap-1.5 text-white text-lg'>
                <FaFacebookF className='hover:bg-white hover:p-1 hover:text-gray-700 hover:rounded-full'/> <AiOutlineTwitter className='hover:bg-white hover:p-1 hover:text-gray-700 hover:rounded-full'/> <FaGooglePlusG className='hover:bg-white hover:p-1 hover:text-gray-700 hover:rounded-full'/> <BsYoutube className='hover:bg-white hover:p-1 hover:text-gray-700 hover:rounded-full'/>
            </div>
          </div>
        </div>
    );
};

export default TopHeader;