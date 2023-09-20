import React from 'react'
import { SiShopee } from 'react-icons/si'
import { AiFillFacebook } from 'react-icons/ai'
import lazadaLogo from '../../assets/lazada-logo.png'
import styles from './About.module.scss'

const About = () => {
  return (
    <div>
        <section id='about'>
            <div style={{ height: '60px' }}></div>
            <div className={`container ${styles.about}`}>
                <h4>Contact Details</h4>
                <div className={styles.desc}>
                    <div className={styles.details}>
                        <p><span>Address: </span> 558, Bulakan, 3017 Bulacan</p>
                        <p><span>Hours: </span> Monday - Friday, 10AM-5PM</p>
                        <p><span>Email Address:</span> bulakenya.giftshop@gmail.com</p>
                    </div>
                    <div className={styles.social}>
                        <h4>Social</h4>
                        <div className={styles.icons}>
                            <a href="https://web.facebook.com/bulakenya.giftshop" 
                                target="_blank" rel="noreferrer"
                            >
                                <AiFillFacebook size={52} className={styles.facebook}/>
                            </a>
                            <a href="https://shopee.ph/bulakenya_giftshop" 
                                target="_blank" rel="noreferrer"
                            >
                                <SiShopee 
                                    size={47} 
                                    className={styles.shopee}
                                /> 
                            </a>
                            <a 
                                href="https://www.lazada.com.ph/shop/bulakenya-gift-shop" 
                                target="_blank" rel="noreferrer"
                                style={{ width: '45px', height: '45px' }}
                            > 
                                <img src={lazadaLogo} 
                                    alt="lazada-logo" 
                                    className={styles.lazada}
                                />
                            </a>
                        </div>
                        
                        
                        
                        
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About
