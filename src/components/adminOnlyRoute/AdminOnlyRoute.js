import { useSelector } from 'react-redux'
import { selectEmail } from '../../redux/features/auth/authSlice'
import { Link } from 'react-router-dom'


const AdminOnlyRoute = ({ children }) => {
    const userEmail = useSelector(selectEmail)
    
    if(userEmail === 'jetermulo@gmail.com') {
        return children
    } 
    return (
        <section style={{height: '80vh'}} className='container bg-slate-100 p-10'>
            <h2 className='mt-16'>Permission Denied.</h2>
            <p>This Page can only be viewed by Admin user.</p>
            <br />
            <Link to='/'>
                <button className='btn btn-neutral'>&larr; Back to Home</button>
            </Link>
        </section>
    );
}

export default AdminOnlyRoute
