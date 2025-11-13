import React from 'react'
import {Navigate} from 'react-router-dom'

const Logout = () => {
    localStorage.removeItem("admin_access")
    localStorage.removeItem("admin_name")
  return (
    <Navigate to="/" />
  )
}

export default Logout