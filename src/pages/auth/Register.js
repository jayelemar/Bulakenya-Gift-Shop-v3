import React, { useState } from 'react'
import styles from './auth.module.scss'
import registerImg from '../../assets/register.svg'
import Card from '../../components/card/Card'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/config'
import Loader from '../../components/loader/Loader'


const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate();

    const registerUser = (e) => {
        e.preventDefault();
        // console.log(email, password, confirmPassword)

        if(password !== confirmPassword) {
            toast.error("Password do not match.")
            setIsLoading(true);
        } 

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                setIsLoading(false);
                toast.success("Congratulation, your account has been successfully created");
                navigate("/login");
            })
            .catch((error) => {
                toast.error(error.message)
                setIsLoading(false);
            });


    };

  return (
    <>
    {isLoading && <Loader /> }
    <section>
        <div style={{ height: '60px' }} className='bg-slate-100'></div>
        <div className={`container slide-up ${styles.auth} flex-row-reverse`}>
            <div className={styles.img}>
                <img src={registerImg} alt="register-img" width={320}/>
            </div>
            <Card>
                <div className={styles.form}>
                    <h3>Register</h3>
                    <form onSubmit={registerUser}>
                        <input 
                            type="text" 
                            placeholder='Email' 
                            required 
                            value={email} 
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                        <input 
                            type="password" 
                            placeholder='Password' 
                            required
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
                        <input 
                            type="password" 
                            placeholder='Confirm Password' 
                            required
                            value={confirmPassword}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value)
                            }}
                        />
                        <button type='submit'>Register</button>
                    </form>
                    <span className={styles.register}>
                        <p>Already have an account?</p>
                        <Link to="/login"> &nbsp; Login</Link>
                    </span>
                </div>
            </Card>
        </div>
    </section> 
    </>
  )
}

export default Register
