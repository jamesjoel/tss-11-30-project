import React from 'react'
import './HeroBanner.css'
import Carousel from 'react-bootstrap/Carousel';

const HeroBanner = () => {

  let allSlide = [
    {
      _id : 1,
      caption : "First",
      image : "1.jpg"
    },
    {
      _id : 2,
      caption : "First",
      image : "1.jpg"
    },
    {
      _id : 3,
      caption : "First",
      image : "1.jpg"
    }
    
  ]

  return (
   <Carousel>

    {
      allSlide.map(item=><Carousel.Item>
        <img src={item.image} style={{width : "100%", height : "450px"}} />
        <Carousel.Caption>
          <h1>{item.caption}</h1>
          
        </Carousel.Caption>
      </Carousel.Item>)
    }
      
      
   </Carousel>
  )
}

export default HeroBanner