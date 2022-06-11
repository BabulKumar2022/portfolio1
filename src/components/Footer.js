import React from 'react';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Fabars, FaTimes, FaGithub, FaFacebook, FaLinkedin, FaInstagram} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className=''>
            <footer>
                <div className="p-10  bg-[#0a192f] text-gray-300 ">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 border-t-2 border-gray-500 pt-8">
                            <div className="flex  justify-end">
                                &copy; babul kumar , all rights reserved
                            </div>
                            <div className=" ">
                                <ul className='flex justify-start items-center'>
                                    <li><a href="https://web.facebook.com/babul.kumar.7739"><FaFacebook/></a></li>
                                    <li><a href="https://github.com/BabulKumar2022/"><FaGithub/></a></li>
                                    <li><a href="https://www.linkedin.com/in/babul-kumar-322824234/"><FaLinkedin/></a></li>
                                    <li><a href="https://www.linkedin.com/in/babul-kumar-322824234/"><FaInstagram/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;