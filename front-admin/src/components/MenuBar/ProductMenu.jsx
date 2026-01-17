import React from 'react'

const ProductMenu = ({NavLink, showAddMenu,setSidebarOpen}) => {
  return (
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
            {
              showAddMenu
              ?
              <li><NavLink onClick={()=>setSidebarOpen(false)} to="/products/add" className="link-dark rounded">Add New</NavLink></li>
              :
              ''

            }
            <li><NavLink onClick={()=>setSidebarOpen(false)} to="/products" className="link-dark rounded">List</NavLink></li>
            
          </ul>
        </div>
      </li>
  )
}

export default ProductMenu