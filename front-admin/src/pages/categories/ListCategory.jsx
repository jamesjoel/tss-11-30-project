import React, { useEffect, useState } from 'react'
import {API_URL} from '../../config/API'
import { ToastContainer, toast } from 'react-toastify'

import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import DeleteBox from '../../ui/DeleteBox';
const ListCategory = () => {

  let navigate = useNavigate();
  let [showDelBox, setShowDelBox] = useState(false);

  let [allCate, setAllCate] = useState([]);
  let [cate, setCate] = useState({});

  useEffect(()=>{
    axios.get(`${API_URL}/category`)
    .then(response=>{
      setAllCate(response.data.result);
    })
  },[])

  let askDelete = (obj)=>{
    setShowDelBox(true);
    setCate(obj);
  }
  let closeDelBox = ()=>{
    
    setShowDelBox(false)
  }

  // let a = "http://localhost:3000"
  // `${a}/api/v1/cateory` 
  

  let confDelete = async()=>{
   
    let response = await axios.delete(`${API_URL}/category/${cate._id}`, { headers : {Authorization : localStorage.getItem("admin_access")}});
    setAllCate(prev=>prev.filter(item=>item._id != cate._id ));
    
    setShowDelBox(false);
    toast("Category Deleted !")
  }

  let goToEdit = (obj)=>{
    navigate(`/category/edit/${obj._id}`)
  }


  
  return (
    <>
    
    <ToastContainer position="bottom-right" theme={'dark'}/>
    <div className='container'>
      <div className="row">
        <h5>List All Categories</h5>
       {
        allCate.length > 0
        ?
         <table className='table my-3 table-light table-bordered table-hover table-striped'>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Title</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              allCate.map((item, index)=><tr key={index}>
                <td>{index+1}</td>
                <td>{item.title}</td>
                <td><button onClick={()=>goToEdit(item)}  className='btn btn-sm btn-info'><i className='fa fa-pencil'></i></button></td>
                <td><button onClick={()=>askDelete(item)} className='btn btn-sm btn-danger'><i className='fa fa-trash'></i></button></td>
              </tr>)
            }
          </tbody>
        </table>
        :
        <div className='alert alert-danger'>
          Not Data Found
        </div>
       }
      </div>
    </div>

    <DeleteBox 
      lable={'Category'} 
      name={cate.title} 
      confDel={confDelete} 
      isClose={closeDelBox} 
      showDelBox={showDelBox}
      />   
    
    </>
  )
}

export default ListCategory

/*
()=>-------)

()=>{
  
    return(----------)
})

*/