import React from 'react'
import Hero from '../components/Hero'
import HeroBottom from '../components/HeroBottom'
import Categories from '../components/Categories'
import Collections from '../components/Collections'
import BestSelling from '../components/BestSelling'
import axios from 'axios'
import {API_URL} from '../config/API'
import { useState } from 'react'
import { useEffect } from 'react'
import ProductBox from '../ui/ProductBox'
const Home = () => {

  let [allPro, setAllPro] = useState([]);

  useEffect(()=>{
   GetAllProduct(); 
  },[])

  let GetAllProduct = async()=>{
   let response = await axios.get(`${API_URL}/product`)
   setAllPro(response.data.result);
    
  }

  return (
    <>
    <Hero />
    <HeroBottom />
    <Categories />
     <section id="new-arrival" className="new-arrival py-5 position-relative overflow-hidden">
    <div className="container">
      <div className="d-flex flex-wrap justify-content-between align-items-center mt-5 mb-3">
        <h4 className="text-uppercase">Our New Arrivals</h4>
        <a href="index.html" className="btn-link">View All Products</a>
      </div>
      <div className="">
        <div className="row">
          {
            allPro.map(item=><ProductBox item={item}  key={item._id} />)
          }
          
          
         
        </div>
       
      </div>
     
    </div>
  </section>
  <BestSelling />
  <Collections />
  </>
  )
}

export default Home