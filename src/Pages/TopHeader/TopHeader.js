import React from 'react';

import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter} from 'react-icons/ai';
import { FaGooglePlusG} from 'react-icons/fa';
import { BsYoutube} from 'react-icons/bs';

const TopHeader = () => {
    return (
        <div className='bg-[#0F4E66] py-3 '>
          <div className='w-[95%] md:w-11/12 mx-auto flex justify-between'>
         <div className='flex gap-5 items-center text-xs'>
         <div>
             <p className='flex gap-1.5 text-white items-center text-xs'> <BsFillTelephoneFill/> 929-413-8565 </p>
            </div>
                
            <div >
            <p className='flex items-center  text-white gap-1'> <IoMdMail/> careguide@gmail.com </p>
            </div>
         </div>
            <div className='flex items-center gap-1.5 text-white'>
                <FaFacebookF className='hover:bg-white hover:p-1 hover:text-gray-700 hover:rounded-full'/> <AiOutlineTwitter className='hover:bg-white hover:p-1 hover:text-gray-700 hover:rounded-full'/> <FaGooglePlusG className='hover:bg-white hover:p-1 hover:text-gray-700 hover:rounded-full'/> <BsYoutube className='hover:bg-white hover:p-1 hover:text-gray-700 hover:rounded-full'/>
            </div>
          </div>
        </div>
    );
};

export default TopHeader;