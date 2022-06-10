import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi'
import heropic from '../assets/5555.png'
import {Link} from 'react-scroll'

const Home = () => {
    return (
        <div name="home" className='w-full h-screen bg-[#0a192f] grid sm:grid-cols-1 md:grid-cols-2 px-8 gap-4'>
            <div className="bg-no-repeat bg-center  " style={{backgroundImage: `url(${heropic})`  }}>
            
            </div>
           
            <div className="max-w-[500px] mx-auto px-2 flex flex-col justify-center h-full ">
                <p className='text-pink-600'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Babul Kumar</h1>
                <h2 className='text-4xl sm;text-7xl font-bold text-[#8892b0]'>I am a full-stack developer</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>I am a full-stack developer specializing in building exponential digital experience. Currently, I am focused on building responsive full-stack web applications</p>
                <div className="">
                    <a href="/">
                     <button  className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600'><Link  to="work" smooth={true} duration={500}>View Work</Link><HiArrowNarrowRight></HiArrowNarrowRight> </button> </a>
                </div>
            </div>

            


        </div>
    );
};

export default Home;