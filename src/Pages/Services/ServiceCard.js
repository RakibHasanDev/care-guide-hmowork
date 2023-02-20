import React from 'react';



const ServiceCard = ({ service }) => {
    
    const {name, img, description} = service
    return (
        <div className="relative flex w-full mx-auto mt-10 bg-hov2">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          className=" rounded-xl w-full  p-[5px]"
        >
          <div className="flex rounded-xl flex-col justify-between bg-gradient-to-r from-orange-400 to-blue-400 shadow-lg lg:h-[32rem] h-[29rem] md:h-[31rem]">
            <div className="flex flex-col justify-center text-white">
              <div className="p-5 transition-transform duration-500 transform ease-in-out hover:scale-105">
                <img
                  src={img}
                  alt=""
                  className="rounded-lg rounded-br-[100px] h-56 lg:h-72 w-full"
                />
              </div>
              <div className="px-5">
                <h1 className="text-2xl font-extrabold mb-4">{name}</h1>
                <p className="font-medium mb-6  ">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;