import React from 'react';
import toolsManufacture from '../assets/comingsoon.png'
import Nav2 from './Nav2';

const Blogs = () => {
    return (
        <div className=' w-full h-screen bg-[#0a192f] grid sm:grid-cols-1 md:grid-cols-1 px-8 gap-4'>
            <Nav2></Nav2>
        
            <div className="bg-no-repeat bg-center mt-20  " style={{ backgroundImage: `url(${toolsManufacture })` }}></div>
        </div>
    );
};

export default Blogs;