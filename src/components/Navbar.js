import React, { useState } from 'react';
import {FaBars, FaTimes, FaGithub,FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import logo from '../assets/logo2.png'
 
const Navbar = () => {
    const [nav, setNav]= useState(false);
    const handleClick = () => setNav(!nav)

   

    return (
        <div className='fixed w-full h-[80px] flex justify-between border-b-2 border-gray-600 items-center px-4  bg-[#0a192f] text-gray-300'>
            <div>
            <img src={logo} alt="Logo" style={{width: '80px'}} />
            </div>
          {/* menu */}
                <ul className=" hidden md:flex">
                    <li>Home</li>
                    <li>About</li>
                    <li>Skill</li>
                    <li>Work</li>
                    <li>Contact</li>
                    <li> <a href="https://drive.google.com/file/d/1NyaGGWcGIz5CR1T_OibD4X4X8wQjxYBc/view?usp=sharing"> Resume</a></li>
                </ul>
            {/* Hamburger  */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars></FaBars> : <FaTimes></FaTimes>}
            </div>
            {/* MobileMenu  */}
            <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skill</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>
            {/* social icon  */}
            {/* <div className='flex fixed flex-col top-[40%] left-0'>
                <ul>
                    <li><a href="/">Linkedin </a></li>
                    <li><a href="/">Facebook </a></li>
                    <li><a href="/">Github </a></li>
                    <li><a href="/">Email </a></li>
                </ul>
            </div> */}
        </div>
    );
};

export default Navbar;