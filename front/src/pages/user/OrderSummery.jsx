import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { API_URL, API_PATH } from '../../config/API';
import axios from 'axios';

const OrderSummery = () => {
  let [pro, setPro] = useState({});
  let param = useParams();
  let id = param.pid;
  useEffect(()=>{
    axios
    .get(`${API_URL}/product/${id}`)
    .then(response=>{
      // console.log(response.data)
      setPro(response.data.result);
    })
  },[])
  return (
    <div className='alert alert-secondary'>
      <h5>Order Summery</h5>
      <div className="row">
        <div className="col-md-10 offset-md-1 mt-5">
            <div className="alert alert-light">
              <h3>Your Order Successfuly Placed...!</h3>
              <p className='text-center'>your order will be delivered in with in 5-7 days.</p>
              <br />
              <p className='fw-bold'>{pro.title}</p>
              
              <img src={`${API_PATH}/product_images/${pro.image}`} style={{width : "150px", heightb : "150px"}} />
              <p>{pro.price}</p>
              <br />
              <NavLink to="/" className='btn btn-info'>Go To Home</NavLink>
            </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSummery