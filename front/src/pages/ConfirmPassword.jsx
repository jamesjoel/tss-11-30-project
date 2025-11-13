import axios from 'axios'
import { useFormik } from 'formik'
import React, {useEffect} from 'react'
import { API_URL } from '../config/API'
import { useNavigate } from 'react-router-dom'

const ConfirmPassword = () => {
    let navigate = useNavigate();
    useEffect(()=>{
    
            if(!localStorage.getItem("pto-liame")){
                navigate("/login")
            }
        },[])
    let confPassFrm = useFormik({
        initialValues : {
            email : localStorage.getItem("pto-liame"),
            password : ""

        },
        onSubmit : (formData)=>{
            axios
            .put(`${API_URL}/userauth/confirm-password`, formData)
            .then(response=>{
                localStorage.removeItem("pto-liame")
                navigate("/login")
            })
        }
    })

  return (
    <div className="container-my-5">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <form onSubmit={confPassFrm.handleSubmit}>
                <div className="login-box">
                    <h3>Update Your Password</h3>
                    <div className="my-2">
                        <label className='mb-2'>New Password</label>
                        <input name='password' onChange={confPassFrm.handleChange} type='password' className='form-control' />
                    </div>
                    <div className="my-2">
                        <label className='mb-2'>Confirm New Password</label>
                        <input name="conf_password" onChange={confPassFrm.handleChange} type='password' className='form-control' />
                    </div>
                    
                    <button type='submit' className='btn btn-dark btn-border'>Next</button>
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ConfirmPassword