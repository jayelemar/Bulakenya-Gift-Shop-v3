import React from 'react'
import logo from '../../assets/bulakenya-logo.png'

const Header = () => {
  return (
    <header>
      <div className=" container flex items-center justify-between bg-red-600 h-12 pl-5">
        <div className="flex items-center">
          <img src={logo} alt="" width={55} />
          <span className='text-slate-100 sm:text-2xl md:text-lg lg:text-2xl'>
            Bulakenya Gift Shop
          </span>

        </div>
        <nav className='flex'>
          <ul className='hidden lg:flex items-center px-5 text-slate-100'>
            <li className='px-5'>Home</li>
            <li className='px-5'>New Arrival</li>
            <li className='px-5'>Best Seller</li>
            <li className='px-5'>Reviews</li>
            <li><button className="btn rounded-none ">Sign up</button></li>
          </ul>
          <label className="btn swap swap-rotate rounded-none lg:hidden">
            <input type="checkbox" />
            <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
            {/* close icon */}
            <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
          </label>

        </nav>
      </div>
    </header>
  )
}

export default Header
