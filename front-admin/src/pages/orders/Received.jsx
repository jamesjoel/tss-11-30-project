import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {API_URL} from '../../config/API'
import OrderTable from '../../ui/OrderTable'

const Received = () => {
  let [allOrder, setAllOrder] = useState([]);
    useEffect(()=>{
        axios
        .get(`${API_URL}/order/getallreceived`, {headers : {Authorization : localStorage.getItem("admin_access")}})
        .then(response=>{
             setAllOrder(response.data);
        })
    },[])
  return (
    <>
        <div className="container">
            <h5>List of All Received Order ({allOrder.length})</h5>
            <OrderTable allOrder = {allOrder} type={"Received"} />
        </div>
    </>
  )
}

export default Received