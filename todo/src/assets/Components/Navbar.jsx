import React from 'react'

import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-blue-950 text-white py-2'>
        <div className='logo'>
            <span className='font-bold text-xl mx-8 '>iTask</span>
        </div>
        <ul className='flex items-center gap-8 mx-9'>
            <li className='cursor-pointer  hover:font-bold transition-all'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
        </ul>
        <ThemeToggle/>
      
    </nav>
  )
}

export default Navbar
