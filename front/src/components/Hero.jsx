import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react';


const Hero = () => {

  let [allLatest, setAllLatest] = useState([]);
  useEffect(()=>{
    axios
    .get(`${import.meta.env.VITE_API_URL}/product/latestcollection`)
    .then(response=>{
      setAllLatest(response.data.result);
    })
  },[])

  let showLatestProduct = ()=>{
    
    let arr = [];
    for(let i=0; i<=2; i++)
    {
      arr.push(<div className="col-md-4">
              <div className="banner-item image-zoom-effect">
                <div className="image-holder">
                  <a href="#">
                    <img src={allLatest[i].latestProduct ? `${import.meta.env.VITE_API_PATH}/product_images/${allLatest[i].latestProduct.image}` : ''} style={{height : "250px"}} alt="product" className="img-fluid"/>
                  </a>
                </div>
                <div className="banner-content py-4">
                  <h5 className="element-title text-uppercase">
                    <a href="index.html" className="item-anchor">{allLatest[i].latestProduct ? allLatest[i].latestProduct.title : ''}</a>
                  </h5>
                  <p className='mb-0'>{allLatest[i].category ? allLatest[i].category[0].title : ''} &gt; <small>{allLatest[i].subcategory ? allLatest[i].subcategory[0].title : ''}</small></p>
                  
                  <div className="btn-left">
                    <a href="#" className="btn-link fs-6 text-uppercase item-anchor text-decoration-none">Discover Now</a>
                  </div>
                </div>
              </div>
            </div>)
    }
    return arr;
  }

  return (
    <section id="billboard" className="bg-light py-5">
    <div className="container">
      <div className="row justify-content-center">
        <h1 className="text-center mt-4" >New Collections</h1>
        <div className="col-md-6 text-center">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptas ut dolorum consequuntur, adipisci
            repellat! Eveniet commodi voluptatem voluptate, eum minima, in suscipit explicabo voluptatibus harum,
            quibusdam ex repellat eaque!</p>
        </div>
      </div>
      <div className="row">
        <div className="main-swiper py-4">
          <div className="row border-animation-left">
          
          { allLatest.length > 0 ? showLatestProduct() : ''}         
           
            
          </div>
          <div className="swiper-pagination"></div>
        </div>
        
      </div>
    </div>
  </section>
  )
}

export default Hero