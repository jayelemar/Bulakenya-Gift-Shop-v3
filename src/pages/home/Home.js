import React, { useEffect, useState } from 'react'
import image1 from '../../assets/wood-oval-brush-removebg-preview.png'
import styles from './Home.module.scss'

const Home = () => {

    return (
        <section>
            <div className={`container ${styles.home}`}>
                    <div className={`carousel  ${styles.content}`}>
                        <img src={image1} alt='carousel-image' />
                        <div className={styles['content-text']} >
                            <h1>Gift and party needs for your Beloved</h1>
                            <p>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button>Start Shopping</button>
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default Home
