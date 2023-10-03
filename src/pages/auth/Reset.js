import React from 'react'
import styles from './auth.module.scss'
import Card from '../../components/card/Card'
import resetImg from '../../assets/forget.svg'
import { Link } from 'react-router-dom'

const Reset = () => {
  return (
    <section>
        <div style={{ height: '60px' }} className='bg-slate-100'></div>
        <div className={`container slide-up ${styles.auth}`}>
            <div className={styles.img}>
                <img src={resetImg} alt="reset-img" width={300}/>
            </div>
                <Card>
                    <div className={styles.form}>
                        <h3>Reset Password</h3>
                        <form>
                            <input type="text" placeholder='Email' required />
                            <button>Reset Password</button>
                            <div className={styles.links}>
                                <Link to="/login">-Login</Link>
                                <Link to="/register">-Register</Link>
                            </div>
                        </form>

                    </div>
                </Card>
        
        </div>
    </section>
  )
}

export default Reset
