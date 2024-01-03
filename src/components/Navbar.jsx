import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='header  '>
    <NavLink to='/'>
        <img src="./logo.png" alt='logo' className='w-15 h-20 object-contain' />
      </NavLink>
     <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Contact
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
