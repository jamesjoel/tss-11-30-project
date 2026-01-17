import React from 'react'

const SubCategoryMenu = ({NavLink, showAddMenu,setSidebarOpen}) => {
  return (
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
            {
              showAddMenu
              ?
              <li><NavLink onClick={()=>setSidebarOpen(false)} to="/subcategory/add" className="link-dark rounded">Add New</NavLink></li>
              :
              ''
            }
            <li><NavLink onClick={()=>setSidebarOpen(false)} to="/subcategory" className="link-dark rounded">List</NavLink></li>
            
          </ul>
        </div>
      </li>
  )
}

export default SubCategoryMenu