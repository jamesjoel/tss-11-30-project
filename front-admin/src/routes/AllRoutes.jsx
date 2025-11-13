import React from 'react'
import {Routes, Route} from 'react-router-dom'
import  Login  from '../Login'
import Dashboard from '../pages/Dashboard'
import ProtactedRoute from './ProtactedRoute'
import Logout from '../pages/Logout'
import ListCategory from '../pages/categories/ListCategory'
import AddCategory from '../pages/categories/AddCategory'
import ListSubCategory from '../pages/subcategory/ListSubCategory'
import AddSubCategory from '../pages/subcategory/AddSubCategory'
import ListProducts from '../pages/products/ListProducts'
import AddProducts from '../pages/products/AddProducts'
import ListUsers from '../pages/users/ListUsers'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='' element={<ProtactedRoute />}>

          <Route path='/users' element={<ListUsers />} />
          <Route path='/category' element={<ListCategory />} />
          <Route path='/category/add' element={<AddCategory />} />
          <Route path='/category/edit/:id' element={<AddCategory />} />
          <Route path='/subcategory' element={<ListSubCategory />} />
          <Route path='/subcategory/add' element={<AddSubCategory />} />
          <Route path='/subcategory/edit/:id' element={<AddSubCategory />} />
          <Route path='/products' element={<ListProducts />} />
          <Route path='/products/add' element={<AddProducts />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/logout' element={<Logout />} />
        </Route>


    </Routes>
  )
}

export default AllRoutes