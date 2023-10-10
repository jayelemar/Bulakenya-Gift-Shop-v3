import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../../redux/features/auth/authSlice'

const ShowOnLogout = ({ children }) => {

    const isLoggedIn = useSelector(selectIsLoggedIn);
    return !isLoggedIn ? children : null ;

}
export default ShowOnLogout
