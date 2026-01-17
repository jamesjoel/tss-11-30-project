import React from 'react'
import './HeroBanner.css'
import Carousel from 'react-bootstrap/Carousel';

const HeroBanner = () => {

  let allSlide = [
    {
      _id : 1,
      caption : "Fashion Bags",
      image : "hero-banner.jpg"
    },
    {
      _id : 2,
      caption : "Stylish Bags",
      image : "hero-banner2.jpg"
    },
    {
      _id : 3,
      caption : "Bags for Everyone",
      image : "hero-banner3.jpg"
    }
    
  ]

  return (
   <Carousel>

    {
      allSlide.map(item=><Carousel.Item>
        <img src={`/images/${item.image}`} style={{width : "100%", height : "550px"}} />
        <Carousel.Caption>
          <h1>{item.caption}</h1>
          
        </Carousel.Caption>
      </Carousel.Item>)
    }
      
      
   </Carousel>
  )
}

export default HeroBanner