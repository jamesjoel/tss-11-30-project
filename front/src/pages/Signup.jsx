import { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Style.css'
import axios from 'axios'
import { useState } from 'react'
import {useFormik} from 'formik'
import {API_URL} from '../config/API'
import SignupSchema from '../schemas/SignupSchema'

const Signup = () => {
    let navigate = useNavigate();
     useEffect(()=>{
            if(localStorage.getItem("user_access")){
                navigate("/")
            }
        },[])
    let [allCity, setAllCity] = useState([]);
    let [isLoading, setIsLoading] = useState(false);

    let signupFrm = useFormik({
        validationSchema : SignupSchema,
        initialValues : {
            name : "",
            email : "",
            password : "",
            repassword : "",
            city : "",
            address : "",
            gender : "",
            contact : ""
        },
        onSubmit : async(formData)=>{ 
           setIsLoading(true); 
        //    axios
        //    .post(`${API_URL}/user`, formData)
        //    .then(response=>{
        //     setIsLoading(false);
        //     navigate("/login");
        //         // console.log(response.data);
        //    })
        let responose = await axios.post(`${API_URL}/user`, formData);
        setIsLoading(false);
        navigate("/login");
        }
    })

    useEffect(()=>{
        GetAllCity()

    },[])


    let GetAllCity = async()=>{
        let response =await axios.get(`${API_URL}/city`);
        setAllCity(response.data);
    }


  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <form onSubmit={signupFrm.handleSubmit}>
                <div className='login-box'>
                    <h3>Registration</h3>
                    
                    <p className='sub-title'>If you a Registered member then <NavLink to="/login">click here</NavLink></p>
                    <div className='my-4'>
                        <label>Name</label>
                        <input name='name' onChange={signupFrm.handleChange} type='text' placeholder='Name' className={'form-control ' + (signupFrm.errors.name && signupFrm.touched.name ? 'is-invalid' : '') } />
                        {
                            signupFrm.errors.name && signupFrm.touched.name
                            ?
                            <small className='text-danger'>{signupFrm.errors.name}</small>
                            :
                            ''
                        }
                    </div>
                    <div className='my-4'>
                        <label>Email</label>
                        <input name='email' onBlur={signupFrm.handleBlur} onChange={signupFrm.handleChange} type='text' placeholder='Email' className={'form-control ' + (signupFrm.errors.email && signupFrm.touched.email ? 'is-invalid' : '') } />
                        {
                            signupFrm.errors.email && signupFrm.touched.email
                            ?
                            <small className='text-danger'>{signupFrm.errors.email}</small>
                            :
                            ''
                        }
                    </div>
                    <div className='my-4'>
                        <label>Password</label>
                        <input name='password' onBlur={signupFrm.handleBlur} onChange={signupFrm.handleChange} type='password' placeholder='Password' className={'form-control ' + (signupFrm.errors.password && signupFrm.touched.password ? 'is-invalid' : '') } />
                        {
                            signupFrm.errors.password && signupFrm.touched.password
                            ?
                            <small className='text-danger'>{signupFrm.errors.password}</small>
                            :
                            ''
                        }
                    </div>
                    <div className='my-4'>
                        <label>Re-Password</label>
                        <input name='repassword' onChange={signupFrm.handleChange} type='password' placeholder='Re-Password' className={'form-control ' + (signupFrm.errors.repassword && signupFrm.touched.repassword ? 'is-invalid' : '') } />
                        {
                            signupFrm.errors.repassword && signupFrm.touched.repassword
                            ?
                            <small className='text-danger'>{signupFrm.errors.repassword}</small>
                            :
                            ''
                        }
                    </div>
                    <div className='my-4'>
                        <label>Contact</label>
                        <input name='contact' onChange={signupFrm.handleChange} type='text' placeholder='Contact' className={'form-control ' + (signupFrm.errors.contact && signupFrm.touched.contact ? 'is-invalid' : '') } />
                        {
                            signupFrm.errors.contact && signupFrm.touched.contact
                            ?
                            <small className='text-danger'>{signupFrm.errors.contact}</small>
                            :
                            ''
                        }
                    </div>
                    <div className='my-4'>
                        <label>Gender</label>
                        <br />
                        <label>Male</label> <input type='radio' value="male" onChange={signupFrm.handleChange} name='gender' />&nbsp;&nbsp;&nbsp;
                        <label>Female</label> <input type='radio' value="female" onChange={signupFrm.handleChange} name='gender'/>
                        <br />
                        {
                            signupFrm.errors.gender && signupFrm.touched.gender
                            ?
                            <small className='text-danger'>{signupFrm.errors.gender}</small>
                            :
                            ''
                        }
                    </div>
                    <div className='my-4'>
                        <label>Address</label>
                        <textarea placeholder='Address' name='address' onChange={signupFrm.handleChange} className={'form-control ' + (signupFrm.errors.address && signupFrm.touched.address ? 'is-invalid' : '') }></textarea>
                        {
                            signupFrm.errors.address && signupFrm.touched.address
                            ?
                            <small className='text-danger'>{signupFrm.errors.address}</small>
                            :
                            ''
                        }
                    </div>
                    <div className='my-4'>
                        <label>City</label>
                        <select className={'form-control ' + (signupFrm.errors.city && signupFrm.touched.city ? 'is-invalid' : '') } name='city' onChange={signupFrm.handleChange}>
                            <option>Select</option>
                            {
                                allCity.map(item=><option>{item.name}</option>)
                            }
                        </select>
                        {
                            signupFrm.errors.city && signupFrm.touched.city
                            ?
                            <small className='text-danger'>{signupFrm.errors.city}</small>
                            :
                            ''
                        }
                    </div>
                    <div className='my-4'>
                        <div className='row'>
                            <div className="col-md-6 offset-md-3">
                                <div className='d-grid'>
                                    <button type='submit' className='btn btn-dark btn-border'>Regsitration { isLoading ? <span className='spinner-border spinner-border-sm'></span> : ''} </button>
                                </div>

                            </div>
                        </div>
                    </div>
                    
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Signup

/*
Hooks in React : 

useEffect(()=>{
    code

}, [])






CORS : Cross Origin Resorces Sharing

React ---- http://localhost:5173 (http://facebook.com)

Server --- http://localhost:3000/api/v1/city  (http://demo.com/api/v1/city)

*/