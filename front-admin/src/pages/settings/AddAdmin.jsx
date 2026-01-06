import React from 'react'
import axios from 'axios'
import {API_URL} from '../../config/API'
import {useFormik} from 'formik'

const AddAdmin = () => {

    let adminFrm = useFormik({
        initialValues : {
            name : "",
            username : "",
            password : "",
            type : ""
        },
        onSubmit : (formData)=>{
            axios
            .post(`${API_URL}/adminauth/add`, formData, {headers : {Authorization : localStorage.getItem("admin_access")}})
            .then(response=>{
                console.log(response.data)
            })
        }
    })


  return (
    <div className='container'>
      <div className="row">
        <h5>Add New Admin</h5>
        <form onSubmit={adminFrm.handleSubmit}>
        <div className='col-md-6'>
            <label htmlFor="" className='my-3'>Name</label>
            <input name='name' onChange={adminFrm.handleChange} type='text' className='form-control' />
            
            <label htmlFor="" className='my-3'>Username</label>
            <input name='username' onChange={adminFrm.handleChange} type='text' className='form-control' />
            <label htmlFor="" className='my-3'>Password</label>
            <input name='password' onChange={adminFrm.handleChange} type='password' className='form-control' />
            <label htmlFor="" className='my-3'>Type of Admin</label>
            <select name='type' onChange={adminFrm.handleChange} className='form-control'>
                <option>Select</option>
                <option value='A'>Type A</option>
                <option value='B'>Type B</option>
                <option value='C'>Type C</option>
                <option value='D'>Type D</option>
                
            </select>
            <br />
            <button type='submit' className='btn btn-primary'>Add</button>
        </div>
        </form>
    </div>
    </div>
  )
}

export default AddAdmin