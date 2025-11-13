import React, { useEffect, useState } from 'react'
import { API_URL } from '../../config/API'
import axios from 'axios'
import {useFormik} from 'formik'
import SubCateSchema from '../../schemas/SubCateSchema'
import { useNavigate, useParams } from 'react-router-dom'

const AddSubCategory = () => {
  let param = useParams();
  
    let navigate = useNavigate();
    let [allCate, setAllCate] = useState([]);
    let [subCate, setSubCate] = useState({
            title : "",
            cate_id : ""
        })

    useEffect(()=>{
      if(param.id){
        GetSubCategory();
      }else{
        setSubCate({title : "", cate_id : ""})
      }
    },[param])

    let GetSubCategory = async()=>{
      let response = await axios.get(`${API_URL}/subcategory/${param.id}`);
      // console.log(response.data.result);
      setSubCate(response.data.result);
    }

    useEffect(()=>{
        axios
        .get(`${API_URL}/category`)
        .then(response=>{
            setAllCate(response.data.result)
        })
    },[])

    let subCateFrm = useFormik({
      enableReinitialize : true,
        validationSchema : SubCateSchema,
        initialValues : subCate,
        onSubmit : (formData)=>{
            if(param.id){
              axios
              .put(`${API_URL}/subcategory/${param.id}`, formData, {headers : {Authorization : localStorage.getItem("admin_access")}})
              .then(response=>{
                //console.log(response.data)
                navigate("/subcategory")
              })
            }else{

              axios
              .post(`${API_URL}/subcategory`, formData, {headers : {Authorization : localStorage.getItem("admin_access")}})
              .then(response=>{
                //console.log(response.data)
                navigate("/subcategory")
              })
            }
        }
    })


  return (
    <div className='container'>
      <div className="row">
        <h5>{param.id ? 'Update' : 'Add New'} Sub-Category</h5>
        <form onSubmit={subCateFrm.handleSubmit}>

        <div className='col-md-6'>
          <label className='my-3'>Select Category</label>
          <select name='cate_id' value={subCateFrm.values.cate_id} onChange={subCateFrm.handleChange} className={'form-control textbox-bg ' + (subCateFrm.errors.cate_id && subCateFrm.touched.cate_id ? 'is-invalid' : '')}>
            <option>Select Category</option>
            {
                allCate.map(item=><option value={item._id} key={item._id}>{item.title}</option>)
            }
          </select>
        
        <br />
          <label className='my-3'>Sub-Category Title</label>
          <input name='title' value={subCateFrm.values.title} onChange={subCateFrm.handleChange} type='text' className={'form-control textbox-bg ' + (subCateFrm.errors.title && subCateFrm.touched.title ? 'is-invalid' : '')}/>
          <br />
          <button type='submit' className={'btn '+(param.id ? 'btn-info' : 'btn-primary')}>{param.id ? 'Update' : 'Add'}</button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default AddSubCategory

/*



*/