import React from 'react'
import axios from 'axios'
import {API_URL, API_PATH} from '../../config/API.js'
import { useEffect } from 'react'
import { useState } from 'react'
import useUserDate from '../../hooks/useUserDate.jsx'

const MyOrder = () => {
  let [allOrder, setAllOrder] = useState([])
  useEffect(()=>{
    axios
    .get(`${API_URL}/order/getallbyuser`, {headers : {Authorization : localStorage.getItem("user_access")}})
    .then(response=>{
      // console.log(response.data)
      setAllOrder(response.data.result);
    })
  },[])


  return (
    <div className='alert alert-secondary'>
        <h5>Your Orders</h5>
        <table className="my-5 table table-dark table-hover table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Image</th>
              <th>Price</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
              <th>Invoice</th>
            </tr>
          </thead>
          <tbody>
            {
              allOrder.map((item, index)=><tr key={item._id}>
                  <td>{index+1}</td>
                  <td>{item.product_id ? item.product_id.title : ''}</td>
                  <td>
                    <img src={ item.product_id ? `${API_PATH}/product_images/${item.product_id.image}` : ''} style={{width : "80px", heightb : "80px"}} />
                  </td>
                  <td>{item.product_id ? item.product_id.price : ''}</td>
                  <td>{item.amount}</td>
                  <td>{useUserDate(item.date)}</td>
                  <td>{item.status==1 ? 'Placed' : item.status==2 ? 'Shipped' : item.status==3 ? 'Received' : 'Cancle'}</td>
                  <td><a className='btn btn-sm btn-info' href={`${API_PATH}/invoices/${item.invoice_name}`} download>Invoice <i class="fa fa-download" aria-hidden="true"></i></a></td>
              </tr>)
            }
          </tbody>
        </table>
    </div>
  )
}

export default MyOrder