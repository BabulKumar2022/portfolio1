import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo2.png'

const Nav2 = () => {
    return (
        <div className='fixed w-full h-[80px] flex justify-between border-b-2 border-gray-600 items-center px-4  bg-[#0a192f] text-gray-300'>
            <div>
            <img src={logo} alt="Logo" style={{width: '80px'}} />
            </div>
          {/* menu */}
                <ul className=" hidden md:flex">
                    <li><Link  to="/ " smooth={true} duration={500}>Home</Link></li>
                    {/* <li><Link  to="about" smooth={true} duration={500}>About</Link></li>
                    <li><Link  to="skill" smooth={true} duration={500}>Skill</Link></li>
                    <li><Link  to="work" smooth={true} duration={500}>Work</Link></li>
                    <li><Link  to="contact" smooth={true} duration={500} >Contact</Link></li>
                    <li> <a href="https://drive.google.com/file/d/1NyaGGWcGIz5CR1T_OibD4X4X8wQjxYBc/view?usp=sharing"> Resume</a></li> */}
                </ul>

      
        </div>
    );
};

export default Nav2;