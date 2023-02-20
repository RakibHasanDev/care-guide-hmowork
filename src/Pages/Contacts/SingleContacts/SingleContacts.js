import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleContacts = () => {

    const singleData = useLoaderData();
    console.log(singleData)
    return (
        <div className='min-h-screen'>
            <h1 className='text-3xl text-center mt-10'>{singleData.office}</h1>
            
        </div>
    );
};

export default SingleContacts;