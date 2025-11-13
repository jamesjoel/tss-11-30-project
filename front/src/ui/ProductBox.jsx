import React from 'react'
import {NavLink} from 'react-router-dom'
import { API_PATH } from '../config/API'

const ProductBox = ({item}) => {


  let makeUrl = (obj)=>{
    let name = obj.title; // new hand bag   ------- new-hand-bag
    let newname = name.split(" ").join("-");
    let url = `/detail/${newname}/${obj._id}`;
    return url;

  }


  return (
    <div className="col-md-3">
            <div className="product-item image-zoom-effect link-effect">
              <div className="image-holder position-relative">
                <a href="index.html">
                  <img src={`${API_PATH}/product_images/${item.image}`} alt="categories" className="product-image img-fluid" />
                </a>
                <a href="index.html" className="btn-icon btn-wishlist">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <use xlinkHref="#heart"></use>
                  </svg>
                </a>
                <div className="product-content">
                  <h5 className="element-title text-uppercase fs-5 mt-3">
                    <NavLink to={makeUrl(item)}>{item.title}</NavLink>
                  </h5>
                  <a href="#" className="text-decoration-none" data-after="Add to cart"><span>{item.price}.00</span></a>
                </div>
              </div>
            </div>
          </div>
  )
}

export default ProductBox
/*
  :1573/detail/new-hand-bag/sd;flgksdg21fgs2dfg

*/


