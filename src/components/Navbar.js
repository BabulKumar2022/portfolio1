import React, { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from '../assets/logo2.png'
import {Link} from 'react-scroll'
 
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
                    <li><Link  to="home" smooth={true} duration={500}>Home</Link></li>
                    <li><Link  to="about" smooth={true} duration={500}>About</Link></li>
                    <li><Link  to="skill" smooth={true} duration={500}>Skill</Link></li>
                    <li><Link  to="work" smooth={true} duration={500}>Work</Link></li>
                    <li><Link  to="contact" smooth={true} duration={500} >Contact</Link></li>
                    <li> <a href="https://drive.google.com/file/d/1NyaGGWcGIz5CR1T_OibD4X4X8wQjxYBc/view?usp=sharing"> Resume</a></li>
                </ul>
            {/* Hamburger  */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars></FaBars> : <FaTimes></FaTimes>}
            </div>
            {/* MobileMenu  */}
            <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick}  to="skill" smooth={true} duration={500}>Skill</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="work" smooth={true} duration={500}>Work</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500} >Contact</Link></li>
            </ul>

        </div>
    );
};

export default Navbar;