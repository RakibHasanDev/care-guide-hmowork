import React from 'react';



const ServiceCard = ({ service }) => {
    
    const {name, img, description} = service
    return (
        <div className='bg-hov2 '>
            <div className=" bg-[#F6F6F6] w-[95%] shadow-lg lg:h-[32rem] h-[29rem] md:h-[31rem] mx-auto rounded-md  my-3 relative text-gray-500" data-aos="zoom-in-up" data-aos-duration='1000'  >
               
                <div className='p-5 transition-transform duration-500 transform ease-in-out hover:scale-105'>
                    <img className=" rounded-lg h-56 lg:h-72 w-full" src={img} alt="" />
                </div>
                <div className="px-5 ">
                   

                    <h5 className="text-2xl tracking-tight  mt-4 mb-2 monoster-fonts text-orange-500">{name }</h5>

                    <p className=''>{description}</p>

                </div>
                
            </div>
        </div>
    );
};

export default ServiceCard;