import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
const NavBar = () => {
  return (
    <>
    <div className="app-topstrip bg-dark py-6 px-3 w-100 d-lg-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center justify-content-center gap-5 mb-2 mb-lg-0">
        <a className="d-flex justify-content-center" href="#">
          {/* <img src="/images/logos/logo-wrappixel.svg" alt="" width="150"/> */}
          <h2 className='text-light'>Administrator</h2>
        </a>

        
      </div>

      <div className="d-lg-flex align-items-center gap-2">
        
      </div>

    </div>
    
    <aside className="left-sidebar">
    
     
     
     <div className="flex-shrink-0 p-3 bg-white" style={{width: "280px"}}>
    <a href="/" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
      <svg className="bi me-2" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
      <span className="fs-5 fw-semibold">Admin</span>
    </a>
    <ul className="list-unstyled ps-0">
      <li className="mb-1 nav-item">
        <NavLink className='btn align-items-center rounded'  to='/'> 
          <i class="fa fa-th-large pe-2" aria-hidden="true"></i> Dashboard
        </NavLink>
        
      </li>
      <li className="mb-1">
        <button className="btn align-items-center rounded collapsed " style={{width : "100%"}} data-bs-toggle="collapse" data-bs-target="#home-collapse1" aria-expanded="false">
          <div style={{display : "flex", justifyContent : "space-between", alignItems : "center", width : "100%"}}>
            <span>
            <i class="fa fa-list pe-2" aria-hidden="true"></i> 
            Categories 
             </span>
            <i class="fa fa-caret-right" aria-hidden="true"></i>
          </div>
            
        </button>
        <div className="collapse" id="home-collapse1" >
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><NavLink to="/category/add" className="link-dark rounded">Add New</NavLink></li>
            <li><NavLink to="/category" className="link-dark rounded">List</NavLink></li>
            
          </ul>
        </div>
      </li>
      <li className="mb-1">
        <button className="btn align-items-center rounded collapsed " style={{width : "100%"}} data-bs-toggle="collapse" data-bs-target="#home-collapse2" aria-expanded="false">
          <div style={{display : "flex", justifyContent : "space-between", alignItems : "center", width : "100%"}}>
            <span>
            <i class="fa fa-list pe-2" aria-hidden="true"></i> 
            Sub-Categories 
             </span>
            <i class="fa fa-caret-right" aria-hidden="true"></i>
          </div>
            
        </button>
        <div className="collapse" id="home-collapse2" >
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><NavLink to="/subcategory/add" className="link-dark rounded">Add New</NavLink></li>
            <li><NavLink to="/subcategory" className="link-dark rounded">List</NavLink></li>
            
          </ul>
        </div>
      </li>
      <li className="mb-1">
        <button className="btn align-items-center rounded collapsed " style={{width : "100%"}} data-bs-toggle="collapse" data-bs-target="#home-collapse5" aria-expanded="false">
          <div style={{display : "flex", justifyContent : "space-between", alignItems : "center", width : "100%"}}>
            <span>
            <i class="fa fa-tags pe-2" aria-hidden="true"></i>
            Products 
             </span>
            <i class="fa fa-caret-right" aria-hidden="true"></i>
          </div>
            
        </button>
        <div className="collapse" id="home-collapse5" >
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><NavLink to="/products/add" className="link-dark rounded">Add New</NavLink></li>
            <li><NavLink to="/products" className="link-dark rounded">List</NavLink></li>
            
          </ul>
        </div>
      </li>
      <li className="mb-0 nav-item">
        <NavLink className='btn align-items-center rounded'  to='/users'> <i class="fa fa-users pe-2" aria-hidden="true"></i>  Users</NavLink>
        
      </li>
      
      <li className="mb-1">
        <button className="btn align-items-center rounded collapsed " style={{width : "100%"}} data-bs-toggle="collapse" data-bs-target="#home-collapse4" aria-expanded="false">
          <div style={{display : "flex", justifyContent : "space-between", alignItems : "center", width : "100%"}}>
            <span>
            <i class="fa fa-gift pe-2" aria-hidden="true"></i> 
            Orders 
             </span>
            <i class="fa fa-caret-right" aria-hidden="true"></i>
          </div>
            
        </button>
        <div className="collapse" id="home-collapse4" >
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" className="link-dark rounded">Overview</a></li>
            <li><a href="#" className="link-dark rounded">Updates</a></li>
            <li><a href="#" className="link-dark rounded">Reports</a></li>
          </ul>
        </div>
      </li>
      <li className="mb-0 nav-item">
        <a className='btn align-items-center rounded'  href=''> <i class="fa fa-cog pe-2" aria-hidden="true"></i>  Setting</a>
        
      </li>
      <li className="mb-1 nav-item">
        <NavLink className='btn align-items-center rounded'  to='/logout'> <i class="fa fa-power-off pe-2" aria-hidden="true"></i> Logout</NavLink>
        
      </li>
      
    </ul>
  </div>

    </aside>
    </>
  )
}

export default NavBar