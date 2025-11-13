import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {API_URL} from '../../config/API'
import { NavLink } from 'react-router-dom'
import UserNav from './UserNav'
const MyAccount = () => {

  let [user, setUser] = useState({});

  useEffect(()=>{
    axios
    .get(`${API_URL}/user/profile`, 
      { 
        headers : 
          { 
            Authorization : localStorage.getItem("user_access") 
          }
      })
    .then(response=>{
        // console.log(response.data);
        setUser(response.data);
    })
  },[])

  return (
    
          <div className='alert alert-secondary'>
            <h5>Profile Information</h5>
            <NavLink to='/user/edit' className='btn btn-sm btn-info m-2'>Edit</NavLink>
            <NavLink to='/user/change-password' className='btn btn-sm btn-info m-2'>Change Password</NavLink>
            <br />
            <br />
            <div className='row'>
              <div className='col-md-6 my-2'>
                <input type='text' value={user.name} disabled className='disabled form-control' />

              </div>
              <div className='col-md-6 my-2'>
                
                <input type='text' value={user.email} disabled className='disabled form-control' />

              </div>
            
            

              <div className='col-md-6 my-2'>
                <label>Your Gender : </label>
                <label style={{textTransform : "capitalize"}}>&nbsp;{user.gender}</label>
              </div>
              <div className='col-md-6 my-2'>
                
                <textarea value={user.address} className='form-control disabled' disabled></textarea>
              </div>
              <div className='col-md-6 my-2'>
                
                 <input type='text' value={user.contact} disabled className='disabled form-control' />

              </div>
              <div className='col-md-6 my-2'>
                
                 <input type='text' value={user.city} disabled className='disabled form-control' />

              </div>
              </div>
            
          </div>
        
  )
}

export default MyAccount