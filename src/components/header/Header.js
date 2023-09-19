import { Link } from 'react-scroll'
import logoSource from '../../assets/bulakenya-logo.png'
import styles from './Header.module.scss'
import { useState } from 'react'

import { Modal } from 'react-daisyui'


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const logo = (
        <div className="flex">
            <a className="btn btn-ghost normal-case text-xl text-red-500">
            <img src={logoSource} alt="bulakenya-logo" width={45}/>
                <h1 className='text-lg md:text-lg lg:text-2xl m-0'>Bulakenya Gift Shop</h1>
            </a>
        </div>
    )

  return (
    <header>
        <div className=""></div>
        <div className="drawer drawer-end container m-0 p-0">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle m-0 p-0" /> 
            {/* Header */}
            <div className="drawer-content flex flex-col m-0 p-0">
                <div className="w-full navbar bg-white flex flex-row justify-between m-0 p-0">
                    {logo} 
                    <div className="hidden md:flex">
                        <ul className="menu menu-horizontal">
                        {/* Navbar menu content here */}
                            <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                            <li><Link to="products" smooth={true} duration={500}>Products</Link></li>
                            <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                            <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
                        </ul>
                    </div>

                    {/* Button */}
                    <button className="btn btn-sm md:btn-lg rounded-none bg-red-500 text-slate-100 hover:btn-neutral hidden md:flex">Sign Up</button>


                           {/* Menu Icon */}
                    <div className="flex md:hidden">
                        <label htmlFor="my-drawer-4" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div> 
                </div>
            </div> 
            {/* mobile navbar */}
            <div className="drawer-side z-10">
                <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content rounded-bl-full rounded-tl-2xl ">
                    {logo}
                    <li className='mt-4'><Link to="home" smooth={true} duration={500}>Home</Link></li>
                    <li><Link to="products" smooth={true} duration={500}>Products</Link></li>
                    <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                    <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
                    <button className="btn btn-sm md:btn-lg rounded-none bg-red-500 text-slate-100 hover:btn-neutral rounded-md mt-5">Sign Up</button>
                </ul>
            </div>
        </div>
    </header>
  )
} 

export default Header
