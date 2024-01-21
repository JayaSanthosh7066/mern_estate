import React from 'react'
import {FaSearch} from "react-icons/fa";
import {Link} from "react-router-dom"; 
const Header = () => {
  return (
    <header className='bg-slate-200'>
        <div className='flex justify-between p-3'>
          <Link to='/'>
        <h1 className='items-center'>
            <span className='text-slate-500 text-2xl'>San</span>
            <span className='text-slate-800 text-2xl'>Estate</span>
        </h1>
          </Link>
        <form className='bg-slate-100 p-2 flex rounded-lg items-center' >
            <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
            <FaSearch className='text-slate-550 '/>
        </form>
        <ul className='flex gap-4 items-center'>
          <Link to='/'>
          <li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer'> Home</li>
          </Link>
          <Link to='/About'>
          <li className='hidden sm:inline text-slate-700 hover:underline cursor-pointer'>About</li>
          </Link>
          <Link to='/sign-in'>
          <li className='sm:inline text-slate-700 hover:underline cursor-pointer'>Sign in</li>
          </Link>
        </ul>
        </div>
    </header>
  )
}

export default Header