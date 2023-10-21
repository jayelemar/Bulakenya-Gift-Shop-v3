import React from 'react'
import { useSelector } from 'react-redux'
import { selectEmail } from '../../redux/features/auth/authSlice'


const AdminOnlyRoute = ({ children }) => {
    const userEmail = useSelector(selectEmail)
    
    if(userEmail === 'jetermulo@gmail.com') {
        return children
    } 
    return null;
}

export default AdminOnlyRoute
