import { useSelector } from 'react-redux'
import { selectEmail } from '../../redux/features/auth/authSlice'


const AdminOnlyLink = ({ children }) => {
    const userEmail = useSelector(selectEmail)
    
    if(userEmail === 'jetermulo@gmail.com') {
        return children
    } 
    return null;
}

export default AdminOnlyLink
