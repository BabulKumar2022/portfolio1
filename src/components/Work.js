import React from 'react';

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className='text-4xl'>WORK</p>
                    <p className=''>// Visit my recent work</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                    <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div className="">
                            <span></span>
                            <div className="">
                                <a href="/">
                                <button></button>
                                </a>
                                <a href="/">
                                <button></button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Work;