import React, { useEffect } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Header from '../components/Header'

const ProtactedRoute = () => {

  let location = useLocation();
  let pathname = location.pathname; //   /category, /subcategory, /product, /order
  // 
  let type = localStorage.getItem("prev_type");
  let showEditDelete = type=="A" || type=="B" ? true : false;

  
    let navigate = useNavigate();
    useEffect(()=>{
        if(! localStorage.getItem("admin_access")){
            navigate("/");
        }
    },[])


  return (
    <>
    <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
    data-sidebar-position="fixed" data-header-position="fixed">

    <NavBar />    
    
    <div className="body-wrapper">
    
      {/* <Header /> */}
      
      <div className="body-wrapper-inner">
        <div className="container-fluid">
      
          <div className="row">
            <div style={{minHeight : "700px"}}>

                <Outlet context={showEditDelete} />


            </div>
          </div>
          </div>
          <div className="py-6 px-6 text-center">
            <p className="mb-0 fs-4">Design and Developed by <a href="#"
                className="pe-1 text-primary text-decoration-underline">Wrappixel.com</a> Distributed by <a href="https://themewagon.com" target="_blank" >ThemeWagon</a></p>
          </div>
        </div>
      </div>
    </div>
  



    </>
  )
}

export default ProtactedRoute