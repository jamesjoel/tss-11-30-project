import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { API_URL } from '../../config/API';
import { useParams } from 'react-router-dom';
const Buynow = () => {
  let [user, setUser] = useState({});
  let [pro, setPro] = useState({});
  let param = useParams();
  let id = param.id;
  let name = param.title;


  useEffect(()=>{
    axios
    .get(`${API_URL}/user/profile`, 
      { 
        headers : 
          { 
            Authorization : localStorage.getItem("user_access") 
          }
      })
    .then(response=>{
        // console.log(response.data);
        setUser(response.data);
    })
  },[])

  useEffect(()=>{
    axios
    .get(`${API_URL}/product/${id}`)
    .then(response=>{
     
      setPro(response.data.result);
    })
  },[])

  let checkout = async()=>{
    let amt = 150 + pro.price - (pro.price*pro.discount/100);
    let response = await axios.post(`${API_URL}/order/checkout`, { amount : amt }, { headers : {Authorization : localStorage.getItem("user_access")}});
    // console.log(response.data)
    if(response.data.success==true){
        let option = {
          key : "rzp_test_Rek8z2OtrReaiV",
          amount : amt*100,
          currency : 'INR',
          order_id : response.data.orderId,
          handler : async(rzpyRes)=>{
            let formData = {
              razorpay_order_id : rzpyRes.razorpay_order_id,
                  razorpay_payment_id : rzpyRes.razorpay_payment_id,
                  razorpay_signature : rzpyRes.razorpay_signature,
                  user_id : user._id,
                  product_id : param.id,
                  
                  amount : amt,
                  address : user.address,
                  
            }
            let OrderResponse = await axios.post(`${API_URL}/order/confirm`, formData, { headers : {Authorization : localStorage.getItem("user_access")}})
            console.log(OrderResponse.data);
          }
        }
        let rzpy = window.Razorpay(option);
        rzpy.open();
    }
  }

  return (
    <div className='row my-3'>
      <div className="col-md-9">
        <div className="alert alert-secondary me-2">
          <h5 className='bg-success text-light p-2'>Login</h5>
          <p>{user.name} {user.contact}</p>
          <br />
          <h5 className='bg-success text-light p-2'>Delivery Address</h5>
          <p>{user.address}</p>
          <p>{user.city}</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="alert alert-secondary ms-2">
         <h5 className='bg-success text-light p-2'>Price Detail</h5>
         <br />
         <p className='d-flex justify-content-between'>
            <span>Price (1 item)</span>
            <span>{pro.price}</span>
          </p>
        
         <p className='d-flex justify-content-between'>
            <span>Discount ({pro.discount}%)</span>
            <span>- {pro.price*pro.discount/100}</span>
          </p>
         <p className='d-flex justify-content-between'>
            <span>Shipping</span>
            <span>+ 150.00</span>
          </p>

         
         <hr />
         <p className='fw-bold d-flex justify-content-between'>
          <span>Total Payable</span>
          <span>{ 150 + pro.price - (pro.price*pro.discount/100)}</span>
         </p>
         <br />
         <button onClick={checkout} className='btn btn-primary'>Checkuot</button>
        </div>
      </div>
    </div>
  )
}

export default Buynow