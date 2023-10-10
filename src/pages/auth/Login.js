import React, { useState } from 'react'
import styles from './auth.module.scss'
import loginImg from '../../assets/login.svg'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineGoogle } from 'react-icons/ai'
import Card from '../../components/card/Card'  
import { toast } from 'react-toastify'
import Loader from '../../components/loader/Loader'
import { auth } from '../../firebase/config'
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";  



const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
    

    const loginUser = (e) => {
        e.preventDefault();
        // console.log(email, password);
        setIsLoading(true)
        
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // const user = userCredential.user;
                setIsLoading(false)
                toast.success("Log In Successful")
                navigate("/")
            })
            .catch((error) => {
                toast.error(error.message)
                setIsLoading(false)
            });
    };

    const provider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // const user = result.user;
                toast.success("Login SUccessfully")
                navigate("/")
            }).catch((error) => {
                toast.error(error.message)
                
            });
    };

  return (
    <>
    {isLoading && <Loader />}
    <section>
        <div style={{ height: '60px' }} className='bg-slate-100'></div>
        <div className={`container slide-up ${styles.auth}`}>
            <div className={styles.img}>
                <img src={loginImg} alt="login-img" width={300}/>
            </div>
                <Card>
                    <div className={styles.form}>
                        <h3>Login</h3>
                        <form onSubmit={loginUser}>
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
                            <button>Login</button>
                        <div className={styles.links}>
                            <Link to="/reset">Reset Password</Link>
                        </div>
                            <p>-- or --</p>
                        </form>
                        <button 
                            className={styles.google} 
                            type='submit'
                            onClick={signInWithGoogle}
                        > <AiOutlineGoogle size={25}/> &nbsp; Login with Google</button>
                        <span className={styles.register}>
                            <p>Don't have an account?</p>
                            <Link to="/register"> &nbsp; Register</Link>
                        </span>
                    </div>
                </Card>
        
        </div>
    </section>
    </>
  )
}

export default Login
