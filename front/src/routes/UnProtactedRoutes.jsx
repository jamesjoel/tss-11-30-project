import React from 'react'

import BlogPost from '../components/BlogPost'
import { Outlet } from 'react-router-dom'

const UnProtactedRoutes = () => {
  return (
    <>
   

    <div style={{minHeight : "700px"}}>
        <Outlet />
    </div>
    <BlogPost />
    </>
  )
}

export default UnProtactedRoutes