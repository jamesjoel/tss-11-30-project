import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {API_URL} from '../../config/API'
import OrderTable from '../../ui/OrderTable'

const Placed = () => {
    let [allOrder, setAllOrder] = useState([]);

    
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

    useEffect(()=>{
        axios
        .get(`${API_URL}/order/getallplaced`, {headers : {Authorization : localStorage.getItem("admin_access")}})
        .then(response=>{
            // console.log(response.data)
            setAllOrder(response.data);
        })
    },[])


  return (
    <>
        <div className="container">
            
            <h5>List of All Placed Order ({allOrder.length})</h5>
            <OrderTable changeStatus={changeStatus} allOrder = {allOrder} type={"Placed"}  />
        </div>
    </>
    
  )
}

export default Placed