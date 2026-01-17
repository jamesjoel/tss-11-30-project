import React from 'react'

const OrderMenu = ({NavLink, setSidebarOpen}) => {
  return (
    <li className="mb-1">
        <button className="btn align-items-center rounded collapsed " style={{width : "100%"}} data-bs-toggle="collapse" data-bs-target="#home-collapse10" aria-expanded="false">
          <div style={{display : "flex", justifyContent : "space-between", alignItems : "center", width : "100%"}}>
            <span>
            <i class="fa fa-gift pe-2" aria-hidden="true"></i> 
            Orders 
             </span>
            <i class="fa fa-caret-right" aria-hidden="true"></i>
          </div>
            
        </button>
        <div className="collapse" id="home-collapse10" >
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><NavLink onClick={()=>setSidebarOpen(false)} to="/orders" className="link-dark rounded">All</NavLink></li>
            <li><NavLink onClick={()=>setSidebarOpen(false)} to="/orders/placed" className="link-dark rounded">Placed</NavLink></li>
            <li><NavLink onClick={()=>setSidebarOpen(false)} to="/orders/shipped" className="link-dark rounded">Shipped</NavLink></li>
            <li><NavLink onClick={()=>setSidebarOpen(false)} to="/orders/received" className="link-dark rounded">Received</NavLink></li>
            <li><NavLink onClick={()=>setSidebarOpen(false)} to="/orders/canceled" className="link-dark rounded">Canceled</NavLink></li>
            
          </ul>
        </div>
      </li>
  )
}

export default OrderMenu