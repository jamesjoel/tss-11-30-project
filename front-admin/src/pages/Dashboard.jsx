import React from 'react'
import axios from 'axios'
import {API_URL} from '../config/API'
import { useState } from 'react'
import { useEffect } from 'react'
const Dashboard  = () => {

  let [totalPro, setTotalPro] = useState({});
  let [totalOrder, setTotalOrder] = useState({});
  let [totalPendingOrder, setTotalPendingOrder] = useState({});
  useEffect(()=>{
    axios
    .get(`${API_URL}/product/countproduct`, {headers : {Authorization : localStorage.getItem("admin_access")}})
    .then(response=>{
      // console.log(response.data)
      setTotalPro(response.data)
    })
  },[])
  useEffect(()=>{
    axios
    .get(`${API_URL}/order/countorder`, {headers : {Authorization : localStorage.getItem("admin_access")}})
    .then(response=>{
      // console.log(response.data)
      setTotalOrder(response.data)
    })
  },[])
  useEffect(()=>{
    axios
    .get(`${API_URL}/order/countpendingorder`, {headers : {Authorization : localStorage.getItem("admin_access")}})
    .then(response=>{
      // console.log(response.data)
      setTotalPendingOrder(response.data)
    })
  },[])

  return (
     <>
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="d-md-flex align-items-center">
                    <div>
                      <h4 className="card-title">Dashboard</h4>
                      <p className="card-subtitle">
                        Ample Admin Vs Pixel Admin
                      </p>
                    </div>
                   
                  </div>

                </div>
              </div>
              <div className='row'>
                  <div className="col-md-3">
                    <div className="alert alert-info ">
                      <div className='d-flex justify-content-evenly'>

                        <div>
                          <i class="fa fa-user fa-2x" aria-hidden="true"></i>
                        </div>
                        <div>
                          <h3>Users</h3>
                        </div>
                      </div>
                        <h1 className='text-center'>1450</h1>

                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="alert alert-info ">
                      <div className='d-flex justify-content-evenly'>

                        <div>
                          <i class="fa fa-user fa-2x" aria-hidden="true"></i>
                        </div>
                        <div>
                          <h3>Products</h3>
                        </div>
                      </div>
                        <h1 className='text-center'>{totalPro.total}</h1>

                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="alert alert-info ">
                      <div className='d-flex justify-content-evenly'>

                        <div>
                          <i class="fa fa-user fa-2x" aria-hidden="true"></i>
                        </div>
                        <div>
                          <h3>All Orders</h3>
                        </div>
                      </div>
                        <h1 className='text-center'>{totalOrder.total}</h1>

                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="alert alert-info ">
                      <div className='d-flex justify-content-evenly'>

                        <div>
                          <i class="fa fa-user fa-2x" aria-hidden="true"></i>
                        </div>
                        <div>
                          <h3>Pending Orders</h3>
                        </div>
                      </div>
                        <h1 className='text-center'>{totalPendingOrder.total}</h1>

                    </div>
                  </div>
              </div>
            </div>
    </>
  )
}

export default Dashboard