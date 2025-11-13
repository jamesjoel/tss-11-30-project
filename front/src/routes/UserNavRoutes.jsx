import React from 'react'
import { Outlet } from 'react-router-dom'
import UserNav from '../pages/user/UserNav'

const UserNavRoutes = () => {
  return (
    <>
    <UserNav />
    <div className='col-md-9'>
    <Outlet />

    </div>
    </>
  )
}

export default UserNavRoutes