import { Link } from 'react-scroll'
import logoSource from '../../assets/bulakenya-logo.png'
import styles from './Header.module.scss'
import { useState } from 'react';

const Header = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const logo = (
        <div className={`flex ${styles.logo}`}>
            <a href='/' className="btn btn-ghost">
                <img src={logoSource} alt="bulakenya-logo" width={45} />
                <h1>Bulakenya Gift Shop</h1>
            </a>
        </div>
    )

    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    const closeMobileNav = () => {
        setIsMobileNavOpen(false);
    };

    return (
        <header>
            <div className=""></div>
            <div className="drawer drawer-end container">
                <input id="my-drawer-4"
                    type="checkbox"
                    className="drawer-toggle"
                    checked={isMobileNavOpen}
                    onChange={toggleMobileNav}
                />
                {/* Header */}
                <div className={`drawer-content ${styles['drawer-content']}`}>
                    <div className={`navbar ${styles.navbar}`}>
                        {logo}
                        <div className={styles['menu-box']}>
                            <ul className="menu menu-horizontal">
                                {/* Horizontal Navbar menu */}
                                <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                                <li><Link to="products" smooth={true} duration={500}>Products</Link></li>
                                <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                                <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
                            </ul>
                        </div>

                        {/* Button */}
                        <button className={`btn btn-sm ${styles['sign-up']}`}>Sign Up</button>


                        {/* Menu Icon */}
                        <div className="flex md:hidden">
                            <label htmlFor="my-drawer-4" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                    </div>
                </div>
                {/* mobile navbar */}
                <div className={`drawer-side ${styles['drawer-side']}`}>
                    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                    <ul className="menu">
                        {logo}
                        <li>
                            <Link
                                to="home"
                                smooth={true}
                                duration={500}
                                onClick={closeMobileNav}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="products"
                                smooth={true}
                                duration={500}
                                onClick={closeMobileNav}
                            >
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="about"
                                smooth={true}
                                duration={500}
                                onClick={closeMobileNav}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                onClick={closeMobileNav}
                            >
                                Contact
                            </Link>
                        </li>
                        <button className={`btn btn-sm`}>Sign Up</button>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
