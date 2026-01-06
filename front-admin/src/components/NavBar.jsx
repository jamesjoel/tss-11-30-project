import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
import CategoryMenu from './MenuBar/CategoryMenu';
import SubCategoryMenu from './MenuBar/SubCategoryMenu';
import ProductMenu from './MenuBar/ProductMenu';
import OrderMenu from './MenuBar/OrderMenu';
import SettingMenu from './MenuBar/SettingMenu';
const NavBar = () => {

  let type = localStorage.getItem("prev_type");

  let showAddMenu = type=="A" || type=="B" || type=="C" ? true:false;
  return (
    <>
      <div className="app-topstrip bg-dark py-6 px-3 w-100 d-lg-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center justify-content-center gap-5 mb-2 mb-lg-0">
          <a className="d-flex justify-content-center" href="#">
            {/* <img src="/images/logos/logo-wrappixel.svg" alt="" width="150"/> */}
            <h2 className='text-light'>Administrator</h2>
          </a>


        </div>
      </div>
      <aside className="left-sidebar">
        <div className="flex-shrink-0 p-3 bg-white" style={{ width: "280px" }}>
          <a href="/" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
            <svg className="bi me-2" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
            <span className="fs-5 fw-semibold">Admin</span>
          </a>
          <ul className="list-unstyled ps-0">
            <li className="mb-1 nav-item">
              <NavLink className='btn align-items-center rounded' to='/'>
                <i class="fa fa-th-large pe-2" aria-hidden="true"></i> Dashboard
              </NavLink>

            </li>
            <li className="mb-0">
              <NavLink className='btn align-items-center rounded' to='/users'> <i class="fa fa-users pe-2" aria-hidden="true"></i>  Users</NavLink>
            </li>

            <CategoryMenu showAddMenu={showAddMenu} NavLink={NavLink} />
            <SubCategoryMenu showAddMenu={showAddMenu} NavLink={NavLink} />
            <ProductMenu showAddMenu={showAddMenu} NavLink={NavLink} />

            
            <OrderMenu NavLink={NavLink} />


            {
              type=="A"
              ?
              <SettingMenu NavLink={NavLink} />
              :
              ''
            }






            <li className="mb-1">
              <NavLink className='btn align-items-center rounded' to='/logout'> <i class="fa fa-power-off pe-2" aria-hidden="true"></i> Logout</NavLink>

            </li>

          </ul>
        </div>

      </aside>
    </>
  )
}

export default NavBar