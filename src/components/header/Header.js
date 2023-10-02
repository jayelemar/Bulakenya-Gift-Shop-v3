import { Link as ScrollLink} from 'react-scroll'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import logoSource from '../../assets/bulakenya-logo.png'
import styles from './Header.module.scss'
import { useState, useContext } from 'react';
import ModalContext from '../../context/ModalContext';

const Header = () => {
    const location = useLocation();

    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const { openModal } = useContext(ModalContext)

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
                            </ul>
                        </div>

                        {/* Button */}
                        <button className={`btn btn-sm ${styles['sign-up']}`}>
                            <RouterLink to='/login'>Sign In</RouterLink>
                        </button>

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


                            <ScrollLink  onClick={ () => {
                                closeMobileNav();
                                openModal();
                                }
                            }>
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
