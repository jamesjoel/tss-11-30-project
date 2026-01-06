import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { API_URL, API_PATH } from '../../config/API'
import DeleteBox from '../../ui/DeleteBox';
import {useOutletContext} from 'react-router-dom'

const ListProducts = () => {

  let photo = useRef();

  let [proIdForFileUpload, setProIdForFileUpload] = useState("");
  let [allPro, setAllPro] = useState([]);
  let [pro, setPro] = useState({})
  let [showDelBox, setShowDelBox] = useState(false);

  useEffect(()=>{
    GetAllPro();
  },[])

  let GetAllPro = async()=>{
    let response = await axios.get(`${API_URL}/product`);
    console.log(response.data.result)
    setAllPro(response.data.result);
  }

  let askDelete = (obj)=>{
    setPro(obj);
    setShowDelBox(true);
  }

  let confirmDelete = async()=>{
    let response = await axios.delete(`${API_URL}/product/${pro._id}`, { headers : {Authorization : localStorage.getItem("admin_access")}})
    
    setAllPro(prev=>prev.filter(item=>item._id != pro._id));
    setShowDelBox(false)

  }
  let delBoxClose = ()=>{
    setShowDelBox(false)
  }

  let viewFile=(a)=>{
    setProIdForFileUpload(a);
    photo.current.click();
  }
  let doUpload = ()=>{
    let file = photo.current.files[0];
    let formData = new FormData(); // create a Empty Form object by javascript like Formik
    formData.append("image", file); // insert image data (file) into the form object

    axios
    .put(`${API_URL}/product/uploadimage/${proIdForFileUpload}`, formData, { headers : {Authorization : localStorage.getItem("admin_access")}})
    .then(response=>{
      // console.log(response.data);
      let name = response.data.name;
      let newarr = allPro.map(item=>{
        if(item._id == proIdForFileUpload){
          item.image = name;
          return item;
        }else{
          return item;
        }
      })
      setAllPro(newarr);
    })


    // console.log(proIdForFileUpload);
    // console.log(photo.current.files[0]);
  }

  return (
    <>
    <DeleteBox 
      lable={"Product"}
      name={pro.title}
      confDel={confirmDelete}
      isClose={delBoxClose}
      showDelBox={showDelBox}
    
    />
    <div className="container">
      <div className="row">
          <h5>List of All Product</h5>
          <input onChange={doUpload} style={{display : "none"}} ref={photo} type='file' />
           <div className="table-responsive mt-4">
                    <table className="table mb-0 text-nowrap varient-table align-middle fs-3">
                      <thead>
                        <tr>
                          <th scope="col" className="px-0 text-muted">
                            Product
                          </th>
                          <th scope="col" className="px-0 text-muted">Price</th>
                          <th className='px-0 text-muted'>Change Image</th>

                          {
                                          useOutletContext()
                                          ?
                                          <>
                                          {/* <th className='px-0 text-muted'>Edit</th> */}
                                          <th className='px-0 text-muted'>Delete</th>
                                          </>
                                          :
                                          ''
                                          
                                        }
                          
                        </tr>
                      </thead>
                      <tbody>
                        {
                          allPro.map(item=><tr key={item._id}>
                          <td className="px-0">
                            <div className="d-flex align-items-center">
                              <img src={item.image=="" ? `${API_PATH}/product_images/product_avatar.jpg` : `${API_PATH}/product_images/${item.image}`} className="rounded-circle" width="40"
                                alt="flexy" />
                              <div className="ms-3">
                                <h6 className="mb-0 fw-bolder">{item.title}</h6>
                                <span className="text-muted">{item.size}</span>
                              </div>
                            </div>
                          </td>
                          <td className="px-0">{item.price}</td>
                           <td className="px-0">
                            <button onClick={()=>viewFile(item._id)} className='btn btn-warning btn-sm'>
                              <i class="fa fa-upload" aria-hidden="true"></i>
                            </button>
                           </td>
                           {
                            useOutletContext()
                            ?
                          <td className='px-0'>
                            <button onClick={()=>askDelete(item)} className='btn btn-danger btn-sm'>
                              <i className='fa fa-trash'></i>
                            </button>
                          </td>
                          :
                          ''

                           }
                          
                        </tr>)
                        }

                        
                        
                      </tbody>
                    </table>
                  </div>
      </div>
    </div>
    </>
  )
}

export default ListProducts