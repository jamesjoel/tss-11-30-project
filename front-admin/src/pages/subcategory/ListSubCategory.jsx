import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {API_URL} from '../../config/API'
import DeleteBox from '../../ui/DeleteBox'
const ListSubCategory = () => {

  let navigate = useNavigate();

  let [allSubCate, setAllSubCate] = useState([])
  let [subCate, setSubCate] = useState({});
  let [showDelBox, setShowDelBox] = useState(false);

  useEffect(()=>{
    axios
    .get(`${API_URL}/subcategory`)
    .then(response=>{
      setAllSubCate(response.data.result);
    })
  },[])

  let askDelete = (obj)=>{
    setSubCate(obj);
    setShowDelBox(true);
  }

  let confirmDelete = async()=>{
    let response = await axios.delete(`${API_URL}/subcategory/${subCate._id}`, { headers : {Authorization : localStorage.getItem("admin_access")}})
    setAllSubCate(prev=>prev.filter(item=>item._id != subCate._id));
    setShowDelBox(false);
  }

  let deleteBoxKoBundKaro = ()=>{
    setShowDelBox(false)
  }

  let goToEdit = (obj)=>{
    navigate(`/subcategory/edit/${obj._id}`)
  }
  return (
    <>
      <DeleteBox 
        lable={"Sub-Category"}
        name={subCate.title}
        confDel={confirmDelete}
        isClose={deleteBoxKoBundKaro}
        showDelBox={showDelBox}
      />
     <div className='container'>
      <div className="row">
        <h5>List All Sub-Categories</h5>
       
         {
          allSubCate.length
          ?
          <table className='table my-3 table-light table-bordered table-hover table-striped'>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Category Title</th>
              <th>Sub-Category Title</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              allSubCate.map((item, index)=><tr key={item._id}>
                <td>{index+1}</td>
                <td>{item.cate_id.title}</td>
                <td>{item.title}</td>
                <td><button onClick={()=>goToEdit(item)} className='btn btn-info btn-sm'><i className='fa fa-pencil'></i></button></td>
                <td><button onClick={()=>askDelete(item)} className='btn btn-danger btn-sm'><i className='fa fa-trash'></i></button></td>
              
              </tr>)
            }
          </tbody>
        </table>
        :
        <div className='alert alert-danger'>No Sub-Category Found</div>
         }
        
      </div>
    </div>
  </>
  )
}

export default ListSubCategory