import React, { useEffect, useState } from 'react'
import { API_URL } from '../../config/API'
import axios from 'axios'

const All = () => {
    let [allOrder, setAllOrder] = useState([]);
    useEffect(() => {
        axios
            .get(`${API_URL}/order/all`)
            .then(response => {
                setAllOrder(response.data)
            })
    }, [])


    let changeStatus = (e, orderObj)=>{
        // console.log(e.target.value)
        // console.log(orderObj)
        axios
        .put(`${API_URL}/order/updateorderstatus/${orderObj._id}`, {status : e.target.value}, {headers : {Authorization : localStorage.getItem("admin_access")}})
        .then(response=>{
            console.log(response.data);
        })
    }

    return (
        <div className='container'>
            <h5>List of All Orders</h5>
            <div className="table-responsive mt-4">
                <table className="table mb-0 text-nowrap varient-table align-middle fs-3">
                    <thead>
                        <tr>
                            <th scope="col" className="px-0 text-muted">Product</th>
                            <th scope="col" className="px-0 text-muted">User</th>
                            <th scope="col" className="px-0 text-muted">Shipping</th>
                            
                            <th scope="col" className="px-0 text-muted">Order Date</th>
                            <th scope="col" className="px-0 text-muted">Status</th>
                            
                            

                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrder.map(item => <tr key={item._id}>
                                <td className="px-0">
                                    <div className="d-flex align-items-center">
                                        
                                        
                                        <div className="ms-3">
                                            <h6 className="mb-0 fw-bolder">{ item.product_id ? item.product_id.title : ''}</h6>
                                            <span className="text-muted">{item.product_id.price}</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-0">
                                    <div className="d-flex align-items-center">
                                        <div className="ms-3">
                                            <h6 className="mb-0 fw-bolder">{ item.user_id ? item.user_id.name : ''}</h6>
                                            <span className="text-muted">{item.user_id ? item.user_id.email : ''} {item.user_id ? item.user_id.contact : ''} <br />{item.user_id ? item.user_id.address : ''}</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-0">
                                    <div className="d-flex align-items-center">
                                        <div className="ms-3">
                                            <h6 className="mb-0 fw-bolder">-{ item.shipping }</h6>
                                            
                                        </div>
                                    </div>
                                </td>
                                
                                <td className="px-0">
                                    <div className="d-flex align-items-center">
                                        <div className="ms-3">
                                            <h6 className="mb-0 fw-bolder">{ new Date(item.date).toDateString() }</h6>
                                            
                                        </div>
                                    </div>
                                </td>
                                
                                <td className='px-0'>
                                    <div className="d-flex align-items-center">
                                        <select onChange={(e)=>changeStatus(e, item)} className='form-control py-0 border border-info'>
                                            <option selected={item.status==1 ? true : false} value="1">Placed</option>
                                            <option selected={item.status==2 ? true : false} value="2">Shipped</option>
                                            <option selected={item.status==3 ? true : false} value="3">Received</option>
                                            <option  selected={item.status==4 ? true : false} value="4">Cancle</option>
                                        </select>
                                    </div>
                                </td>
                                
                        </tr>
                    
                    
                    )}



                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default All