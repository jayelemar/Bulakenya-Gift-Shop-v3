import styles from './Admin.module.scss'
import { Route, Routes } from 'react-router-dom'
import { Home, AddProduct, ViewProducts, Orders, Navbar } from '../../components/admin'

const Admin = () => {
  return (
    <section className={styles.admin}>

        <div className={styles.navbar}>
            <Navbar />
        </div>

        <div className={styles.content}>
            <Routes>
                <Route path='home' element={ <Home /> } />
                <Route path='add-products' element={ <AddProduct /> } />
                <Route path='orders' element={ <Orders /> } />
                <Route path='all-products' element={ <ViewProducts /> } />
            </Routes>
        </div>
        
    </section>
  )
}

export default Admin
