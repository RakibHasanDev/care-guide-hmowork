import React from 'react';

import contact1 from '../../../src/Assests/Contacts/icon-house-01.png'
import contact2 from '../../../src/Assests/Contacts/icon-house-02.png'
import contact3 from '../../../src/Assests/Contacts/icon-house-03.png'

const Contacts = () => {

    const contacts = [
        {
            img : {contact1},
            description : [
                "We here to help 24/7,",
                "and phone",
                "#929-413-8565"
            ]

        }
    ]
    return (
        <div className='w-[95%] mx-auto md:w-[80%]'>
            <div className='grid md:grid-cols-3 gap-7'>

                
            </div>       
        </div>
    );
};

export default Contacts;