import React from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";
import toolsManufacture from '../assets/ToolsManufacture.png'
import Nav2 from "./Nav2";

const ToolsManufacture = () => {
    return (
<div>
             <Nav2></Nav2>
            <div className="w-full h-screen bg-[#0a192f] grid sm:grid-cols-1 md:grid-cols-2 px-8 gap-4">
                <div className="bg-no-repeat bg-center mt-20 " style={{ backgroundImage: `url(${toolsManufacture })` }}></div>

                <div className="max-w-[500px] mx-auto px-2 flex flex-col justify-center h-full ">
                <h2 className=" pt-20 text-3xl sm;text-7xl font-bold text-[#8892b0]">
                   Tools Manufacture Featured </h2>
                   <div className="text-white">
                   <p>□ Payment processing facility for users . </p>
                   <p>□ Admin dashboard facility.</p>
                   <p>□ API’s are secured by  JWT.</p>
                   <p>□ Product managing facility for owner .</p>
                   </div>
                   
                    <h2 className="text-3xl sm;text-7xl font-bold text-[#8892b0]">
                    Used technology in this project </h2>
                    <div className="text-[#f0f1f2]  max-w-[700px]">
                        <p>□ Javascript </p>
                        <p>□ React js</p>
                        <p>□ React router</p>
                        <p>□ CustomLink</p>
                        <p>□ RequireAuth</p>
                        <p>□ RequireAuth</p>
                        <p>□ RequireAuth</p>
                        <p>□ useEffect</p>
                        <p>□ useState</p>
                        <p>□ CustomHook</p>
                        <p>□ FireBase</p>
                    </div>
                    
                    <div className="">
                        <a href="https://tools-trade-16920.web.app/">
                        <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600">
                            Live Project<HiArrowNarrowRight></HiArrowNarrowRight>{" "}
                        </button>{" "}
                        </a>
                    </div>
                </div>
             </div>
         </div>
    );
};

export default ToolsManufacture;