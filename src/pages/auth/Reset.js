import React, { useState } from 'react'
import styles from './auth.module.scss'
import Card from '../../components/card/Card'
import resetImg from '../../assets/forget.svg'
import { Link } from 'react-router-dom'
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../../firebase/config'
import { toast } from 'react-toastify'
import Loader from '../../components/loader/Loader'

const Reset = () => {
    const [email, setEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const resetPassword = (e) => {
        e.preventDefault();
        // console.log(email)
        setIsLoading(true)

        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success("Check your email for Password Reset Link")
                setIsLoading(false)
            })
            .catch((error) => {
                toast.error(error.message)
                setIsLoading(false)
            });
    };

  return (
    <>
    {isLoading && <Loader />}
    <section>
        <div style={{ height: '60px' }} className='bg-slate-100'></div>
        <div className={`container slide-up ${styles.auth}`}>
            <div className={styles.img}>
                <img src={resetImg} alt="reset-img" width={300}/>
            </div>
                <Card>
                    <div className={styles.form}>
                        <h3>Reset Password</h3>
                        <form onSubmit={resetPassword}>
                            <input 
                                type="text" 
                                placeholder='Email' 
                                required
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                            />
                            <button type='submit'>Reset Password</button>
                            <div className={styles.links}>
                                <Link to="/login">-Login</Link>
                                <Link to="/register">-Register</Link>
                            </div>
                        </form>

                    </div>
                </Card>
        
        </div>
    </section>
    </>
  )
}

export default Reset
