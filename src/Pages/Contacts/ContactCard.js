import React from 'react';

const ContactCard = () => {
    return (
        <div className="card card-side bg-base-100 shadow-2xl">
        <figure><img className='w-96 h-64' src="https://www.google.com/maps/vt/data=epQyhRC_fwvjHEBl1rkPTf-lmIb_W9k9WnB6YNiIM7i0lb4GREeHyy5jDUGZsJvesjwl3bWF13MZJoSSE5g3ArpGC2OALILjTfEBvnaHBv_t64ofKenZbVYgrlrazegVGH7P6K_BKujLrJzi7zbfKAkcA_GiFifhMDPWG1cYbW42OwGXQtwtdqLOvgqVXC416A3KRHDYSmPCA55w4jI_GeuWEMfLRfys8itR8TRXQLqUKFSt9O2uyktXD31c" alt="Movie" /></figure>
        <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
                <button className="btn bg-[#F6811C]">See More</button>
            </div>
        </div>
    </div>
    );
};

export default ContactCard;