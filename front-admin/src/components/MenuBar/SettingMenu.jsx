import React from 'react'

const SettingMenu = ({NavLink}) => {
  return (
    <li className="mb-1">
        <button className="btn align-items-center rounded collapsed " style={{width : "100%"}} data-bs-toggle="collapse" data-bs-target="#setting-collapse" aria-expanded="false">
          <div style={{display : "flex", justifyContent : "space-between", alignItems : "center", width : "100%"}}>
            <span>
            <i class="fa fa-cog pe-2" aria-hidden="true"></i> 
            Settings 
             </span>
            <i class="fa fa-caret-right" aria-hidden="true"></i>
          </div>
            
        </button>
        <div className="collapse" id="setting-collapse" >
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><NavLink to="/setting/preveledge" className="link-dark rounded">Preveledge List</NavLink></li>
            <li><NavLink to="/setting/add" className="link-dark rounded">Add Admins</NavLink></li>
            <li><NavLink to="/setting/list" className="link-dark rounded">List</NavLink></li>
            <li><NavLink to="/setting/pagination" className="link-dark rounded">Pagination</NavLink></li>
            
            
          </ul>
        </div>
      </li>
  )
}

export default SettingMenu