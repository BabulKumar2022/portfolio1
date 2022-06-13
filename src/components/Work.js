import React from 'react';
import tutorService from '../assets/privateService.jpg'
import LaptopVill from '../assets/laptopVill.jpg'
import warehouse from '../assets/warehouseMange.jpg'
import toolsManu from '../assets/toolsManufac.jpg'
import { Link } from 'react-router-dom';

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className='text-4xl inline border-b-4 border-pink-600 '>WORKS</p>
                    <p className='pt-4'>// Visit my recent work</p>
                </div>
                {/* container  */}
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                    {/* grid-item  */}
                    <div  style={{backgroundImage: `url(${tutorService})`}} className="  shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className='text-2xl font-bold text-white tracking-wider'>
                              Private services provide
                            </span>
                            <div className="">
                                <Link to="/privateService">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Details</button>
                                </Link>
                                <a href="https://github.com/BabulKumar2022/private-tutor-assign-10">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Github</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* ----------------- */}
                    <div  style={{backgroundImage: `url(${toolsManu})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className='text-2xl font-bold text-white tracking-wider'>
                            Tools manufacture 
                            </span>
                            <div className="">
                            <Link to="/toolsManufacture">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Details</button>
                                </Link>
                                <a href="https://github.com/BabulKumar2022/-tools-maufac-client-assign-12">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Github</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* ------------------- */}
                    <div  style={{backgroundImage: `url(${warehouse})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className='text-2xl font-bold text-white tracking-wider'>
                             Warehouse management apps
                            </span>
                            <div className="">
                            <Link to="/stockManage">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Details</button>
                                </Link>
                                <a href="https://github.com/BabulKumar2022/warehouse-client-assign-11">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Github</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* ------------------- */}
                    <div  style={{backgroundImage: `url(${LaptopVill})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className='text-2xl font-bold text-white tracking-wider'>
                               Product parsecs apps
                            </span>
                            <div className="">
                                <a href="https://profound-chaja-daaf0b.netlify.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                                </a>
                                <a href="https://github.com/BabulKumar2022/assign-project-9">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Github</button>
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