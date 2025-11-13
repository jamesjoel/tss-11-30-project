import React, { useEffect } from 'react'
import './Style.css'
import { NavLink, useNavigate, Navigate } from 'react-router-dom'
import { useFormik } from 'formik'
import LoginSchema from '../schemas/LoginSchema'
import {API_URL} from '../config/API'
import axios from 'axios'
import { useState } from 'react'

const Login = () => {
    let navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem("user_access")){
            navigate("/")
        }
    },[])



    let [errMsg, setErrMsg] = useState("");
    let LoginFrm = useFormik({
        validationSchema : LoginSchema,
        initialValues : {
            email : "",
            password : ""
        },
        onSubmit : (formData)=>{
            // console.log(formData)
            // return;
            axios
            .post(`${API_URL}/userauth`, formData)
            .then(response=>{

                if(response.data.success==true)
                {
                    let token = response.data.token;
                    let name = response.data.name;
                    localStorage.setItem("user_access", token);
                    localStorage.setItem("user_name", name);
                    if(localStorage.getItem("checkloggedin")){
                        let url = localStorage.getItem("checkloggedin");
                        // console.log(url)
                        // return (<Navigate to={url} replace={true} />)
                        localStorage.removeItem("checkloggedin")
                        navigate(url);
                        // window.location.href = url;
                    }else{

                        navigate("/");
                    }

                }
                else{
                    if(response.data.errType==1){
                        setErrMsg("This Email Id or Password is Incorrect !")
                    }
                    if(response.data.errType==2){
                        
                        setErrMsg("This Password is Incorrect !")
                    }
                    if(response.data.errType==3)
                    {
                        setErrMsg("You are deactivated your, please contact our team for activation!")

                    }
                    if(response.data.errType==4)
                    {
                        setErrMsg("You are not verified user by Email Id !")

                    }
                }
            })
        }
    })


  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <form onSubmit={LoginFrm.handleSubmit}>
                <div className='login-box'>
                    <h3>Login</h3>
                    <p className='sub-title'>If you a New member then <NavLink to="/signup">click here</NavLink></p>
                    <div className='my-4'>
                        <label>Email</label>
                        <input onChange={LoginFrm.handleChange}  name='email' type='text' placeholder='Email' className={'form-control '+ (LoginFrm.errors.email && LoginFrm.touched.email ? 'is-invalid' : '')} />
                        {
                            LoginFrm.errors.email && LoginFrm.touched.email
                            ?
                            <small className='text-danger'>{LoginFrm.errors.email}</small>
                            :
                            ''
                        }
                    </div>
                    <div className='my-4'>
                        <label>Password</label>
                        <input onChange={LoginFrm.handleChange}  name='password' type='password' placeholder='Password'  className={'form-control '+ (LoginFrm.errors.password && LoginFrm.touched.password ? 'is-invalid' : '')}/>
                        <small className='d-flex justify-content-end'><NavLink to="/forgot-password" style={{color : "blue"}}>Forgot Password</NavLink></small>
                        {
                            LoginFrm.errors.password && LoginFrm.touched.password
                            ?
                            <small className='text-danger'>{LoginFrm.errors.password}</small>
                            :
                            ''
                        }
                    </div>
                    <div className='my-4'>
                        <div className='row'>
                            <div className="col-md-6 offset-md-3">
                                <div className='d-grid'>
                                    <button type='submit' className='btn btn-dark btn-border'>Login</button>
                                </div>

                            </div>
                        </div>
                        
                        <p className='text-danger text-center mt-3'>{errMsg}</p>
                    </div>
                    
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login