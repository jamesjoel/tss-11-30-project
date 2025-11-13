import { useFormik } from 'formik'
import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../config/API'
import EditUserSchema from '../../schemas/EditUserSchema'

const Edit = () => {
    let navigate = useNavigate();
    let [allCity, setAllCity] = useState([]);
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

  useEffect(()=>{
        GetAllCity()

    },[])


    let GetAllCity = async()=>{
        let response =await axios.get(`${API_URL}/city`);
        setAllCity(response.data);
    }


    let [user, setUser] = useState({
        name : "",
        email : "",
        city : "",
        address : "",
        gender : "",
        contact : ""
    })
    let editFrm = useFormik({
        validationSchema : EditUserSchema,
        enableReinitialize : true,
        initialValues : user,
        onSubmit : (formData)=>{
            //console.log(formData)
            axios
            .put(`${API_URL}/user/editprofile`,formData, { headers : {Authorization : localStorage.getItem("user_access")} })
            .then(response=>{
                // console.log(response.data)
                navigate("/user/myaccount")
            })
        }

    })

  return (
     <div className='alert alert-secondary'>
            <h5>Update Your Profile Information</h5>
            <NavLink to='/user/myaccount' className='btn btn-sm btn-info'>Back</NavLink>
            <br />
            
            <div className='row'>
                <form onSubmit={editFrm.handleSubmit}>
                <div className='col-md-12'>
                    <div className='my-2'>
                        <label>Full Name</label>
                        <input name='name' value={editFrm.values.name} onChange={editFrm.handleChange} type='text' className='form-control' />
                    </div>
                    <div className='my-2'>
                        <label>Email</label>
                        <input name='email' value={editFrm.values.email} onChange={editFrm.handleChange} disabled type='text' className='form-control disabled' />
                    </div>
                    <div className='my-2'>
                        <label>Address</label>
                        <textarea name='address' value={editFrm.values.address} onChange={editFrm.handleChange} className='form-control' ></textarea>
                    </div>
                    <div className='my-2'>
                        <label>Contact</label>
                        <input name='contact' value={editFrm.values.contact} onChange={editFrm.handleChange} type='text' className='form-control' />
                    </div>
                    <div className='my-2'>
                        <label>City</label>
                        <select name='city' value={editFrm.values.city} onChange={editFrm.handleChange} className='form-control' >
                            <option>Select City</option>
                            {
                                allCity.map(item=><option key={item._id} value={item.name}>{item.name}</option>)
                            }
                        </select>
                    </div>
                    <div className='my-2'>
                        <label>Gender</label>
                        <br />
                        Male <input type='radio' name='gender' onChange={editFrm.handleChange} checked={user.gender=="male" ? true : false} value={'male'}/>
                        Female <input type='radio' name='gender' onChange={editFrm.handleChange} checked={user.gender=="female" ? true : false} value={'female'}/>
                    </div>
                    <div className='my-2'>
                        <button type='submit' className='btn btn-success'>Update</button>
                    </div>
                </div>  
                </form>
            </div>
            
          </div>
  )
}

export default Edit

/*
axios.get("/25", {})
axios.delete("/44", {})


axios.post("", formData, {})
axios.put()


*/