import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer>
      <div className={`container ${styles.footer} `}>
          <p className='font-normal text-base-200'>Copyright © 2023 - All right reserved by Bulakenya Gift Shop</p>
      </div>
</footer>
  )
}

export default Footer
