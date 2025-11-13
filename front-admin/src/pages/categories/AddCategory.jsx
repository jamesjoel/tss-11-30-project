import React, { useEffect, useState } from 'react'
import {useFormik} from 'formik'
import CateSchema from '../../schemas/CateSchema'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
import {API_URL} from '../../config/API'
const AddCategory = () => {
  let param = useParams();
  let navigate = useNavigate();

  useEffect(()=>{
    if(param.id){
      GetCategoryById();
    }else{
      setCate({ title : "" })
    }
  },[param])

  let [cate, setCate] = useState({
      title : ""
    })

  

  let cateFrm = useFormik({
    enableReinitialize : true,
    validationSchema : CateSchema,
    initialValues : cate,
    onSubmit : (formData)=>{
      if(param.id){
        axios
      .put(`${API_URL}/category/${param.id}`, formData, {
        headers : { Authorization : localStorage.getItem("admin_access")}
      })
      .then(response=>{
        // console.log(response.data)
        navigate("/category")
      })
      }else{
        axios
      .post(`${API_URL}/category`, formData, {
        headers : { Authorization : localStorage.getItem("admin_access")}
      })
      .then(response=>{
        // console.log(response.data)
        navigate("/category")
      })
      }
    }
  })
  


  let GetCategoryById = async()=>{
    let response = await axios.get(`${API_URL}/category/${param.id}`);
    setCate(response.data.result)
  }

  return (
    <div className='container'>
      <div className="row">
        <h5>{param.id ? 'Update' : 'Add New'} Category</h5>
        <form onSubmit={cateFrm.handleSubmit}>
        <div className='col-md-6'>
          <label className='my-3'>Category Title</label>
          <input name='title' value={cateFrm.values.title} onChange={cateFrm.handleChange} type='text' className={'form-control textbox-bg ' + (cateFrm.errors.title && cateFrm.touched.title ? 'is-invalid' : '')} />
          <br />
          <button type='submit' className={'btn '+ (param.id ? 'btn-info' : 'btn-primary')}>{param.id ? "Update" : "Add"}</button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default AddCategory

/*
  Form  ---- formik ----- filled

  let form = useFormik({
    enableReinitialize : true,
    inivalues : {state},
    validationSch : 
    onSub : 
  })


  1. enableReinitialize : true,
  2. initialValues manage by State
  3. all input should use "value" prop
*/


