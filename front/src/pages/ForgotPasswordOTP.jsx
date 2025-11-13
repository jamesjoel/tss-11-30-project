import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../config/API'
import { useNavigate } from 'react-router-dom'

const ForgotPasswordOTP = () => {
    let navigate = useNavigate();
    useEffect(()=>{

        if(!localStorage.getItem("pto-liame")){
            navigate("/login")
        }
    },[])

    let [errMsg, setErrMsg] = useState("")
    let OTPFrm = useFormik({
        initialValues : {
            otp : "",
            email : localStorage.getItem("pto-liame")
        },
        onSubmit : (formData)=>{
            // console.log(formData)
            axios
            .post(`${API_URL}/userauth/check-otp`, formData)
            .then(response=>{
                if(response.data.success==true){
                    localStorage.setItem("pto-liame", response.data.email)
                    navigate("/confirm-password");
                }else{
                    setErrMsg("OTP is Incorrect")
                }
            })

        }
    })
  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <form onSubmit={OTPFrm.handleSubmit}>                
                <div className="login-box">
                    <h3>OTP</h3>
                    <p>{localStorage.getItem("pto-liame")}</p>
                    <div className="my-2">
                        <label className='mb-2'>Insert OTP</label>
                        <input name='otp' onChange={OTPFrm.handleChange} type='text' className='form-control' />
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

export default ForgotPasswordOTP