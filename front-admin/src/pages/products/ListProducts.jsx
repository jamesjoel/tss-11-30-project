import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL, API_PATH } from '../../config/API'
import DeleteBox from '../../ui/DeleteBox';

const ListProducts = () => {

  let [allPro, setAllPro] = useState([]);
  let [pro, setPro] = useState({})
  let [showDelBox, setShowDelBox] = useState(false);

  useEffect(()=>{
    GetAllPro();
  },[])

  let GetAllPro = async()=>{
    let response = await axios.get(`${API_URL}/product`);
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
           <div className="table-responsive mt-4">
                    <table className="table mb-0 text-nowrap varient-table align-middle fs-3">
                      <thead>
                        <tr>
                          <th scope="col" className="px-0 text-muted">
                            Product
                          </th>
                          <th scope="col" className="px-0 text-muted">Title</th>
                          <th className='px-0 text-muted'>Delete</th>
                          
                        </tr>
                      </thead>
                      <tbody>
                        {
                          allPro.map(item=><tr key={item._id}>
                          <td className="px-0">
                            <div className="d-flex align-items-center">
                              <img src={`${API_PATH}/product_images/${item.image}`} className="rounded-circle" width="40"
                                alt="flexy" />
                              <div className="ms-3">
                                <h6 className="mb-0 fw-bolder">{item.title}</h6>
                                <span className="text-muted">{item.size}</span>
                              </div>
                            </div>
                          </td>
                          <td className="px-0">{item.price}</td>
                          <td className='px-0'>
                            <button onClick={()=>askDelete(item)} className='btn btn-danger btn-sm'>
                              <i className='fa fa-trash'></i>
                            </button>
                          </td>
                          
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