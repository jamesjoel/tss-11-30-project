import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { API_URL } from '../../config/API'
import {useFormik} from 'formik'
import {useNavigate} from 'react-router-dom'

const AddProducts = () => {

    let image = useRef();

    let navigate = useNavigate();

    let [allCate, setAllCate] = useState([]);
    let [allSubCate, setAllSubCate] = useState([]);

    useEffect(()=>{
        axios
        .get(`${API_URL}/category`)
        .then(response=>{
            // console.log(response.data)
            setAllCate(response.data.result);
        })
    },[])


    let proFrm = useFormik({
      initialValues : {
              title : "",
          price : "",
          color : "",
          size : "",
          discount : "", 
          detail : "",
          cate_id : "",
          sub_cate_id : "",
          image : ""
      },
      onSubmit : (formData)=>{
        // console.log(formData);return;
        let ProData = new FormData();
        // create new FormData object for sending "files" and "other form data"
        let myfile = image.current.files[0];
        ProData.append("title", formData.title);
        ProData.append("price", formData.price);
        ProData.append("color", formData.color);
        ProData.append("size", formData.size);
        ProData.append("discount", formData.discount);
        ProData.append("detail", formData.detail);
        ProData.append("cate_id", formData.cate_id);
        ProData.append("sub_cate_id", formData.sub_cate_id);
        ProData.append("image", myfile);

        
        axios
        .post(`${API_URL}/product`, ProData, { headers : {Authorization : localStorage.getItem("admin_access")}})
        .then(response=>{
          // console.log(response.data.result)
          navigate("/products")
        })
      }
    })

    let getAllSubCate = (e)=>{
        // console.log(e.target.value)
        let cateid = e.target.value;
        axios
        .get(`${API_URL}/subcategory/getallsubcate/${cateid}`)
        .then(response=>{
            // console.log(response.data);
            setAllSubCate(response.data.result)
        })
    }
  return (
    <div className='container'>
      <div className="row">
        <h5>Add New Product</h5>

       
       
        <form onSubmit={proFrm.handleSubmit}>
        <div className='col-md-6'>
          <label className='my-3'>Title</label>
          <input name='title' onChange={proFrm.handleChange} type='text' placeholder='Product Title' className='form-control textbox-bg' />
          <label className='my-3'>Price</label>
          <input name='price' onChange={proFrm.handleChange} type='text' placeholder='Product Price' className='form-control textbox-bg' />
          <label className='my-3'>Select Product Image</label>
          <input name='image' ref={image} onChange={proFrm.handleChange} type='file' className='form-control textbox-bg' />
          <label className='my-3'>Color</label>
          <select name='color' onChange={proFrm.handleChange}  className='form-control textbox-bg'>
            <option>Select Color</option>
            <option value="white">White</option>
            <option value="black">Black</option>
            <option value="brown">Brown</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="peach">Peach</option>
            <option value="gray">Gray</option>
          </select>
          <label  className='my-3'>Size</label>
           <select name='size' onChange={proFrm.handleChange} className='form-control textbox-bg'>
            <option>Select Size</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
           </select>

          <label className='my-3'>Select Category</label>
          <select name='cate_id' onChange={(e)=>{getAllSubCate(e); proFrm.handleChange(e)}} className='form-control textbox-bg'>
            <option>Select Category</option>
            {
                allCate.map(item=><option value={item._id} key={item._id}>{item.title}</option>)
            }
          </select>
          
          
          <label className='my-3'>Select Sub-Category</label>
          <select name='sub_cate_id' onChange={proFrm.handleChange} className='form-control textbox-bg'>
            <option>Select Category First</option>
            {
                allSubCate.map(item=><option value={item._id} key={item._id}>{item.title}</option>)
            }
          </select>
          
          <label className='my-3'>Discount</label>
          <input name='discount' onChange={proFrm.handleChange} type='text' className='form-control textbox-bg' placeholder='Discount' />
          <label className='my-3'>Detail</label>
          <textarea name='detail' onChange={proFrm.handleChange} className='form-control textbox-bg' placeholder='Product Detail' ></textarea>

          <br />
          <button type='submit' className='btn btn-primary'>Add Product</button>
        </div>
        </form>
        
      </div>
    </div>
  )
}



export default AddProducts


/*

onResize
onLoad
onUnLoad
onClick
onSubmit
onChange
onFocus
onBlue
onContextMenu
onDoubleClick
onKeyDown
onKeyUp
onMouseOver
onMouseOut
onMouseMove
onCopy
onPaste
onPrint



*/