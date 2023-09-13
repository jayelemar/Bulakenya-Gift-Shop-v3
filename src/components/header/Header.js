import React from 'react'
import logo from '../../assets/bulakenya-logo.png'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header>
      <div className={`container ${styles.header}`}>
        <div className={styles.logo}>
          <img src={logo} alt="" width={55} />
          <span>
            Bulakenya Gift Shop
          </span>
        </div>
        <nav>
            <ul>
              <li>Home</li>
              <li>Products</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            
        </nav>
        <button className={styles['btn-sign-up']}>Sign up</button>
          <label className="btn swap swap-rotate rounded-none bg-inherit lg:hidden">
            <input type="checkbox" />
            <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
            {/* close icon */}
            <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
          </label>
      </div>
    </header>
  )
} 

export default Header
