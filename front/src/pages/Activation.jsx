import React from 'react'
import { NavLink } from 'react-router-dom'

const Activation = () => {
  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-md-12">
                <h1 className='text-center'>You are Activate Now.....</h1>
                <p className='text-center'>
                    <NavLink to='/login' className='btn btn-info btn-lg'>Login</NavLink>
                </p>

            </div>
        </div>
    </div>
  )
}

export default Activation