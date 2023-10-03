import React from 'react'
import styles from './auth.module.scss'
import loginImg from '../../assets/login.svg'
import { Link } from 'react-router-dom'
import { AiOutlineGoogle } from 'react-icons/ai'
import Card from '../../components/card/Card'

const Login = () => {
  return (
    <section>
        <div style={{ height: '60px' }} className='bg-slate-100'></div>
        <div className={`container slide-up ${styles.auth}`}>
            <div className={styles.img}>
                <img src={loginImg} alt="login-img" width={300}/>
            </div>
                <Card>
                    <div className={styles.form}>
                        <h3>Login</h3>
                        <form>
                            <input type="text" placeholder='Email' required />
                            <input type="password" placeholder='Password' required />
                            <button>Login</button>
                        <div className={styles.links}>
                            <Link to="/reset">Reset Password</Link>
                        </div>
                            <p>-- or --</p>
                        </form>
                        <button className={styles.google}> <AiOutlineGoogle size={25}/> &nbsp; Login with Google</button>
                        <span className={styles.register}>
                            <p>Don't have an account?</p>
                            <Link to="/register"> &nbsp; Register</Link>
                        </span>
                    </div>
                </Card>
        
        </div>
    </section>
  )
}

export default Login
