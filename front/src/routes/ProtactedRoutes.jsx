import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import UserNav from '../pages/user/UserNav';

const ProtactedRoutes = () => {

  let navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user_access")) {
      navigate("/login");
    }
  }, [])

  return (
    <>
      <div style={{ minHeight: "700px" }}>
        <div className="container my-3">
          <div className="row">
            
            
              <Outlet />
            

          </div>
        </div>
      </div>
        </>
        )
}

        export default ProtactedRoutes