import { Link as ScrollLink} from 'react-scroll'
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom'
import logoSource from '../../assets/bulakenya-logo.png'
import styles from './Header.module.scss'
import { useState, useContext, useEffect } from 'react';
import ModalContext from '../../context/ModalContext';
import { auth } from '../../firebase/config';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { toast } from 'react-toastify';
import { FaUserCircle } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } from '../../redux/features/auth/authSlice';
import ShowOnLogin from '../hiddenLink/ShowOnLogin';
import ShowOnLogout from '../hiddenLink/ShowOnLogout';
import AdminOnlyLink from '../adminOnlyRoute/AdminOnlyLink';



const Header = () => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [displayName, setDisplayName] = useState("")
    
    const location = useLocation();
    const { openModal } = useContext(ModalContext)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logo = (
        <div className={`flex ${styles.logo}`}>
            <RouterLink to='/' className="btn btn-ghost">
                <img src={logoSource} alt="bulakenya-logo" width={45} />
                <h1>Bulakenya Gift Shop</h1>
            </RouterLink>
        </div>
    )

    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen);
    };

    const closeMobileNav = () => {
        setIsMobileNavOpen(false);
    };

    const logOutUser = () => {
        signOut(auth).then(() => {
                toast.success("Logout Successfully")
                navigate("/")
            }).catch((error) => {
                toast.error(error.message)
            });
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setDisplayName(user.displayName)
                dispatch(SET_ACTIVE_USER({
                    email: user.email,
                    userName: user.displayName,
                    userID: user.uid,
                }))
            } else {
                setDisplayName("");
                dispatch( REMOVE_ACTIVE_USER() )

            }
            });
    }, [dispatch, displayName])

    return (
        <header>
            <div className="container"></div>
            <div className="drawer drawer-end container">
                <input id="my-drawer-4"
                    type="checkbox"
                    className="drawer-toggle"
                    checked={isMobileNavOpen}
                    onChange={toggleMobileNav}
                />
                {/* Header */}
                <div className={`container drawer-content ${styles['drawer-content']}`}>
                    <div className={`navbar ${styles.navbar}`}>
                        {logo}
                        <div className={styles['menu-box']}>
                            {/* Horizontal Navbar menu */}
                            {location.pathname === '/' ? (
                                <ul className="menu menu-horizontal">
                                    <li>
                                        <ScrollLink to="home" smooth={true} duration={500}>
                                            Home
                                        </ScrollLink>
                                    </li>
                                    <li>
                                        <ScrollLink to="products" smooth={true} duration={500}>
                                            Products
                                        </ScrollLink>
                                    </li>
                                    <li>
                                        <ScrollLink to="about" smooth={true} duration={500}>
                                            About
                                        </ScrollLink>
                                    </li>
                                    <li>
                                        <ScrollLink to='/#' onClick={ openModal }>
                                            Contact
                                        </ScrollLink>
                                    </li>
                                </ul>
                            ) : (
                                <div></div>
                            )}
                        </div>
                        <ShowOnLogin>
                        <div className='flex relative left-14'>
                            <AdminOnlyLink>
                                <RouterLink to='/admin'>
                                    <button className='btn btn-neutral text-slate-100 hidden lg:flex relative left-4'>
                                        Admin
                                    </button>
                                </RouterLink>
                            </AdminOnlyLink>
                            <div className="dropdown dropdown-bottom dropdown-end flex relative left-4 ">
                                <label tabIndex={0} className="btn m-1 hidden lg:flex">Hi, {displayName}</label>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <ShowOnLogin>
                                        <li><RouterLink to="/" onClick={logOutUser} className='justify-center'>Logout</RouterLink></li>
                                    </ShowOnLogin>
                                </ul>
                            </div>
                        </div>
                        </ShowOnLogin>

                        <ShowOnLogout>
                            {location.pathname === '/' ? (
                                <RouterLink to='/login'>
                                    <button className={`btn btn-sm ${styles['sign-up']}`}>Sign In</button>
                                </RouterLink>
                            ) : (
                                <RouterLink to='/#'>
                                    <button className='mx-6'>Back to Home</button>
                                </RouterLink>
                            )}
                        </ShowOnLogout>

                        <div>
                            <ShowOnLogin>
                                <label tabIndex={0} className="m-1 lflex hidden sm:flex lg:hidden relative"><FaUserCircle size={16}/> &nbsp; Hi, {displayName}</label>
                            </ShowOnLogin>

                            {/* Menu Icon */}
                            <div className="flex lg:hidden">
                                <label htmlFor="my-drawer-4" className="btn btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
                
                {/* mobile navbar */}
                <div className={`drawer-side ${styles['drawer-side']}`}>
                    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                    
                    {location.pathname === '/' ? (
                        <ul className="menu">
                            {logo}
                            
                            <li>
                                <ScrollLink
                                    to="home"
                                    smooth={true}
                                    duration={500}
                                    onClick={closeMobileNav}
                                >
                                    Home
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink
                                    to="products"
                                    smooth={true}
                                    duration={500}
                                    onClick={closeMobileNav}
                                >
                                    Products
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink
                                to="about"
                                smooth={true}
                                duration={500}
                                onClick={closeMobileNav}
                                >
                                    About
                                </ScrollLink>
                            </li>
                            <li>
                            <ScrollLink to='/#' onClick={ () => {
                                closeMobileNav();
                                openModal();
                                }
                            }>
                                Contact
                            </ScrollLink>
                            </li>
                            <li>
                            <ShowOnLogin>
                                <AdminOnlyLink>
                                    <RouterLink to="/" className='justify-center border border-solid bg-slate-700 item-end text-slate-100'>Admin</RouterLink>
                                </AdminOnlyLink>
                            </ShowOnLogin>
                            </li>
                            <li>
                            <ShowOnLogin>
                                <RouterLink to="/" onClick={logOutUser} className='justify-center border border-solid border-slate-400 item-end'>Logout</RouterLink>
                            </ShowOnLogin>
                            </li>
                            <ShowOnLogout>
                                <RouterLink to='/login'>
                                    <button className={`btn btn-sm w-full ${styles['sign-up']}`} onClick={ closeMobileNav }>Sign In</button>
                                    </RouterLink>
                            </ShowOnLogout>

                            
                            
                        </ul>

                    ) : (
                        <ul className="menu">
                            {logo}
                            <li>
                                <RouterLink to='/' onClick={ closeMobileNav }>
                                    Back to Home
                                </RouterLink>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header
