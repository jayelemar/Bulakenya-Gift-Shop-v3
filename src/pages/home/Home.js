import React from 'react'
import ovalBrush from '../../assets/wood-oval-brush-removebg-preview.png'
import styles from './Home.module.scss'
import { Link } from 'react-scroll'
import { Products, Contact, About } from '../../pages'
import Slider from '../../components/slider/Slider'

const Home = ( ) => {
    return (
        <section id='home'>
            <div style={{ height: '60px' }}></div>
            
            <div className={`container ${styles.home}` }>
                <div className={`carousel  ${styles.content}`}>
                    <Slider className={styles.brush}/>

                    <div className={styles['content-text']} >
                        <h1>Gift and party needs for your Beloved</h1>
                        <p>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to='products'><button className='p-0 m-0'>Start Shopping</button></Link>
                    </div> 
                </div>
            </div>
            {/* <Products /> */}
            <div className='container flex bg-red-400 flex-col'>
                <About />
                <Contact />
            </div>
        </section>
    )
}

export default Home;
