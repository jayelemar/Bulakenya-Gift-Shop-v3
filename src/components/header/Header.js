import { Link as ScrollLink} from 'react-scroll'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import logoSource from '../../assets/bulakenya-logo.png'
import styles from './Header.module.scss'
import { useState } from 'react';

const Header = () => {
    const location = useLocation();

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
<<<<<<< Updated upstream
                                <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                                <li><Link to="products" smooth={true} duration={500}>Products</Link></li>
                                <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                                <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
=======
                                <li>
                                {location.pathname === '/' ? (
                                    <ScrollLink to="home" smooth={true} duration={500}>
                                        Home
                                    </ScrollLink>
                                ) : (
                                    <RouterLink to='/'>Home</RouterLink>
                                )}

                                </li>
                                <li>
                                    <ScrollLink to="products" smooth={true} duration={500}>
                                        Products
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink to="about" smooth={true} duration={500}>
                                        About
                                    </ScrollLink>
                                </li>
                                <li>
                                    <ScrollLink onClick={ openModal }>
                                        Contact
                                    </ScrollLink>
                                </li>
>>>>>>> Stashed changes
                            </ul>
                        </div>

                        {/* Button */}
<<<<<<< Updated upstream
                        <button className={`btn btn-sm ${styles['sign-up']}`}>Sign Up</button>
=======
                        <button className={`btn btn-sm ${styles['sign-up']}`}>
                            <RouterLink to='/login'>Sign In</RouterLink>
                        </button>
>>>>>>> Stashed changes


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
                        {location.pathname === '/' ? (
                            <ScrollLink
                                to="home"
                                smooth={true}
                                duration={500}
                                onClick={closeMobileNav}
                            >
                                Home
                            </ScrollLink>
                        ) : (
                            <RouterLink to='/' onClick={ closeMobileNav }>
                                Home
                            </RouterLink>
                        )}
                            
                        </li>
                        <li>
                            <ScrollLink
                                to="products"
                                smooth={true}
                                duration={500}
                                onClick={closeMobileNav}
                            >
                                Products
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink
                                to="about"
                                smooth={true}
                                duration={500}
                                onClick={closeMobileNav}
                            >
                                About
                            </ScrollLink>
                        </li>
                        <li>
<<<<<<< Updated upstream
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                onClick={closeMobileNav}
                            >
=======
                            <ScrollLink  onClick={ () => {
                                closeMobileNav();
                                openModal();
                                }
                            }>
>>>>>>> Stashed changes
                                Contact
                            </ScrollLink>
                        </li>
                        <button className={`btn btn-sm ${styles['sign-up']}`}>
                            <RouterLink to='/login'>Sign In</RouterLink>
                        </button>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
