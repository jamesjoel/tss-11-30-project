import React from 'react'
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {isLoggedOut} from '../../redux/AuthSlice'
import { removeAll } from '../../redux/CartSlice'

const Logout = () => {
    let dispatch = useDispatch();
    dispatch(isLoggedOut());
    dispatch(removeAll());
    localStorage.removeItem("user_access");
    localStorage.removeItem("name");
    
  return (
    <Navigate to="/login" />
  )
}

export default Logout