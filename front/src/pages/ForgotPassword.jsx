import React, { useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import { API_URL } from '../config/API'
import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
    let navigate = useNavigate();
    let [errMsg, setErrMsg] = useState("")
    let forgotFrm = useFormik({
        initialValues : {
            email : ""
        },
        onSubmit : async(formData)=>{
            let response = await axios.post(`${API_URL}/userauth/forgotpass`, formData)
            if(response.data.success==true){
                let email = response.data.email;
                localStorage.setItem("pto-liame", email)
                navigate("/forgot-password-otp");
            }else{
                setErrMsg("This Email Id is Not Registered !")
            }
        }
    })

  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <form onSubmit={forgotFrm.handleSubmit}>                
                <div className="login-box">
                    <h3>Forgot Password</h3>
                    <div className="my-2">
                        <label className='mb-2'>Registered Email</label>
                        <input name='email' onChange={forgotFrm.handleChange} type='text' className='form-control' />
                    </div>
                    <br />
                    <p className='text-danger text-center'>{errMsg}</p>
                    <button type='submit' className='btn btn-dark btn-border'>Next</button>
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ForgotPassword