import React from 'react'
import {Routes, Route, Outlet} from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import MyCart from '../pages/MyCart'
import UnProtactedRoutes from './UnProtactedRoutes'
import ProtactedRoutes from './ProtactedRoutes'
import MyAccount from '../pages/user/MyAccount'
import Logout from '../pages/user/Logout'
import Detail from '../pages/Detail'
import HeroBanner from '../components/HeroBanner'
import Buynow from '../pages/user/Buynow'
import Shop from '../pages/Shop'
import Edit from '../pages/user/Edit'
import ChangePassword from '../pages/user/ChangePassword'
import UserNavRoutes from './UserNavRoutes'
import ForgotPassword from '../pages/ForgotPassword'
import ForgotPasswordOTP from '../pages/ForgotPasswordOTP'
import ConfirmPassword from '../pages/ConfirmPassword'
import Activation from '../pages/Activation'
import OrderSummery from '../pages/user/OrderSummery'
import MyOrder from '../pages/user/MyOrder'
import NotFound from '../pages/NotFound'
const AllRoutes = () => {
  // :5173/shop/bags
  // :5173/shop/bags/hand-bags
  return (
    <Routes>

      <Route path='/' element={<UnProtactedRoutes />}>
        <Route path='' element={<RoutesForBanner />}>
          <Route path='' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='activation' element={<Activation />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
          <Route path='forgot-password-otp' element={<ForgotPasswordOTP />} />
          <Route path='confirm-password' element={<ConfirmPassword />} />
        </Route>
        <Route path='shop' element={<Shop />} />
        <Route path='shop/:cate' element={<Shop />} />
        <Route path='shop/:cate/:subcate' element={<Shop />} />


        <Route path='contact' element={<Contact />} />
        <Route path='detail/:title/:id' element={<Detail />} />
        <Route path='mycart' element={<MyCart />} />
      </Route>

      <Route path='/user' element={<ProtactedRoutes />}>
        <Route path='buynow/:title/:id' element={<Buynow />} />

        <Route path='' element={<UserNavRoutes />}>

          <Route path='my-order' element={<MyOrder />} />
          <Route path='order-summery/:pid' element={<OrderSummery />} />
          <Route path='change-password' element={<ChangePassword />} />
          <Route path='myaccount' element={<MyAccount />} />
          <Route path='edit' element={<Edit />} />
          <Route path='logout' element={<Logout />} />
        </Route>


      </Route>

      <Route path='*' element={<NotFound />} />

    </Routes>
  )
}

export default AllRoutes


let RoutesForBanner = ()=>{
  return(
    <>
    <HeroBanner />
    <Outlet />
    </>
  )
}