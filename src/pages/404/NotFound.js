import React from 'react'
import styles from './NotFound.module.scss'
import image404 from '../../assets/not-found.svg'
import { NavLink } from 'react-router-dom'


const NotFound = () => {
  return (
    <section>
      <div className={`container ${styles['not-found']}`}>
          <img src={image404} width={300} alt="not-found.img" />
          <div className={styles['text-404']}>
            <h2>Oops! Page Not Found</h2>
            <p>We are sorry, the page you were looking doesn't exist.</p>
            <NavLink to='/'><button>Back to Home</button></NavLink>
          </div>
      </div>
    </section>
  )
}

export default NotFound
