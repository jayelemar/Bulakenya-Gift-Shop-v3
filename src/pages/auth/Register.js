import React from 'react'
import styles from './auth.module.scss'
import registerImg from '../../assets/register.svg'
import Card from '../../components/card/Card'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
<section>
        <div style={{ height: '60px' }} className='bg-slate-100'></div>
        <div className={`container slide-up ${styles.auth} flex-row-reverse`}>
            <div className={styles.img}>
                <img src={registerImg} alt="register-img" width={320}/>
            </div>
            <Card>
                <div className={styles.form}>
                    <h3>Register</h3>
                    <form>
                        <input type="text" placeholder='Email' required />
                        <input type="password" placeholder='Password' required />
                        <input type="password" placeholder='Confirm Password' required />
                        <button>Register</button>
                    </form>
                    <span className={styles.register}>
                        <p>Already have an account?</p>
                        <Link to="/login"> &nbsp; Login</Link>
                    </span>
                </div>
            </Card>
        
        </div>
    </section>   

  )
}

export default Register
