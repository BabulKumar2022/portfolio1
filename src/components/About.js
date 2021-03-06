import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-2">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className='text-4xl  inline border-b-4 border-pink-600'>AboutMe</p>
                    </div>
                    <div className=""></div>
                </div>
                <div className="max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8">
                    <div className="sm:text-right text-4xl font-bold">
                        <p>Hi, I am Babul Kumar, nice to meet you. Please take look around</p>
                    </div>
                    <div className="">
                        <p>I am a full-stack developer specializing in building exponential digital experience. Currently, I am focused on building responsive full-stack web applications</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;