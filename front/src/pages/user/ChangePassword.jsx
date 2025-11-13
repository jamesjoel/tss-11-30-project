import { useFormik } from 'formik'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
import { API_URL } from '../../config/API'
import { useState } from 'react'
const ChangePassword = () => {
    let navigate = useNavigate();
    let [errMsg, setErrMsg] = useState("");
    let passFrm = useFormik({
        initialValues : {
            curr_pass : "",
            new_pass : "",
            conf_new_pass : ""
        },
        onSubmit : (formData, {setSubmitting})=>{
            
            axios
            .put(`${API_URL}/user/changepassword`, formData, {headers : {Authorization : localStorage.getItem("user_access")}})
            .then(response=>{
                 if(response.data.success==true){
                    toast("Your Password Successfuly Changed !", { onClose : ()=>navigate("/user/myaccount")})
        
                }else{
                    setErrMsg("Your Current Password in Inccorect")
                    setSubmitting(false);
                }
            })
             
            
        }
    })
    // let response = await axios.put(`${API_URL}/user/changepassword`, formData, {headers : {Authorization : localStorage.getItem("user_access")}});
    
   


    return (
        <>
        
        <ToastContainer />
        <div className='alert alert-secondary'>
            <div className="row">
                <div className="col-md-10">
                    <h5>Change Your Password</h5>
                </div>
                <div className="col-md-2 d-flex justify-content-end">
                    <NavLink to='/user/myaccount' className='btn btn-sm btn-info m-2'>Back</NavLink>
                </div>
            </div>
            
            

            <br />
            <br />
            <div className='row'>
                <form onSubmit={passFrm.handleSubmit}>
                <div className='col-md-12'>
                    <div className="my-2">
                        <label>Current Password</label>
                        <input onChange={passFrm.handleChange} type='password' name='curr_pass' className='form-control'/>
                        <small className='text-danger'>{errMsg}</small>
                    </div>
                    <div className="my-2">
                        <label>New Password</label>
                        <input onChange={passFrm.handleChange} type='password' name='new_pass' className='form-control'/>
                    </div>
                    <div className="my-2">
                        <label>Confirm New Password</label>
                        <input onChange={passFrm.handleChange} type='password' name='conf_new_pass' className='form-control'/>
                    </div>
                    <br />
                    <button  type='submit' disabled={passFrm.isSubmitting} className='btn btn-success'>Update</button>
                </div>
                </form>
            </div>

        </div>
        </>
    )
}

export default ChangePassword