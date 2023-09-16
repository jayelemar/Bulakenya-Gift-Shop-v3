import { Link } from 'react-scroll'
import logo from '../../assets/bulakenya-logo.png'
import styles from './Header.module.scss'
import { useState } from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { Button, Modal } from 'react-daisyui'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { Dialog, handleShow } = Modal.useDialog();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

  return (
    <header>
        <div className={`container ${styles.header}`}>
            <Link to='home' smooth={true} duration={500}><div className={styles.logo}>
                    <img src={logo} alt="" width={55} />
                    <span>
                        Bulakenya Gift Shop
                    </span>
                </div>
            </Link>
            <nav className={ isMenuOpen ? styles['show-nav'] : styles['close-nav'] }>
                <ul>
                    <Link to='home' smooth={true} duration={500}><li>Home</li></Link>
                    <Link to='products' smooth={true} duration={500}><li>Products</li></Link>
                    <Link to='about' smooth={true} duration={500}><li>About</li></Link>
                    <Link activeClass='' to='contact' smooth={true} duration={500}><li>Contact</li></Link>
                </ul>
            </nav>
            <button 
                className={styles['btn-sign-up']} 
                onClick={handleShow}>
                    Sign up
            </button>
            <div className={styles['menu-icon']}>
                <HiOutlineMenuAlt3 size={28} onClick={toggleMenu}/>
            </div>
        </div>

    </header>
  )
} 

export default Header
