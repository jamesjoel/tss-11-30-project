import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {API_URL} from '../../config/API'
import OrderTable from '../../ui/OrderTable'

const Shipped = () => {
    let [allOrder, setAllOrder] = useState([]);
    useEffect(()=>{
        axios
        .get(`${API_URL}/order/getallshipped`, {headers : {Authorization : localStorage.getItem("admin_access")}})
        .then(response=>{
             setAllOrder(response.data);
        })
    },[])

   let changeStatus = (obj, current_status)=>{
        
        let formData = {status:0}

        if(current_status==1){
            formData.status=2
            // API call for change status into 2
        }
        if(current_status==2){
            formData.status=3
            // API call for change status into 3
            
        }
        if(current_status==4){
            formData.status=4
            // API call for change status into 4
        }

        axios.put(`${API_URL}/order/changeorderstatus/${obj._id}`, formData, {headers : {Authorization : localStorage.getItem("admin_access")}})
        .then(response=>{
            // console.log(response.data);
            setAllOrder(prev=>prev.filter(item=>item._id != obj._id));
        })
        


    }
  return (
    <>
        <div className="container">
            <h5>List of All Shipped Order ({allOrder.length})</h5>
            <OrderTable changeStatus={changeStatus} allOrder = {allOrder} type={"Shipped"} />
        </div>
    </>
  )
}

export default Shipped