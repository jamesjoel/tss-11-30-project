import React from 'react'
import {NavLink} from 'react-router-dom'

const CatetegoryDropDown = ({info}) => {
  return (
    <NavLink to="/shop" className="dropdown-item item-anchor">{info.title}</NavLink>
  )
}

export default CatetegoryDropDown