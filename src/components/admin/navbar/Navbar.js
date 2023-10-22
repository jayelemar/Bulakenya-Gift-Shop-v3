import { useSelector } from 'react-redux'
import styles from './Navbar.module.scss'
import { FaUserCircle } from 'react-icons/fa'
import { selectUserName } from '../../../redux/features/auth/authSlice'
import { NavLink } from 'react-router-dom'



const Navbar = () => {
    const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : '');
    
    const userName = useSelector(selectUserName);
    return (
        <aside className={styles.navbar}>
            <div className={styles.user}>
                <FaUserCircle size={40} color='#fff'/>
                {userName}
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/admin/home' className={activeLink}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/admin/orders' className={activeLink}>
                            Orders
                        </NavLink>
                    </li>                    <li>
                        <NavLink to='/admin/home' className={activeLink}>
                            Home
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>

    )
}

export default Navbar
