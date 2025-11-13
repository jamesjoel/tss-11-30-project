import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="app-header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="navbar-collapse justify-content-end px-0" id="navbarNav">
            <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
               
              <li className="nav-item dropdown">
                <a className="nav-link show dropdown-toggle" href="javascript:void(0)" id="drop2" data-bs-toggle="dropdown" aria-expanded="true">
                  {localStorage.getItem("admin_name")}
                </a>
                <div className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up show" aria-labelledby="drop2" data-bs-popper="static">
                  <div className="message-body">
                    <a href="javascript:void(0)" className="d-flex align-items-center gap-2 dropdown-item">
                      <i className="ti ti-user fs-6"></i>
                      <p className="mb-0 fs-3">My Profile</p>
                    </a>
                    
                    <NavLink to="/logout" className="btn btn-outline-primary mx-3 mt-2 d-block">Logout</NavLink>
                  </div>
                </div>
              </li>
            </ul>
          </div>
         
        </nav>
      </header>
  )
}

export default Header