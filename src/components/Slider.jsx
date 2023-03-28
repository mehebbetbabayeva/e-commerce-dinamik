import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import dress1 from "../assets/img/dress1.jpg";
import dress2 from "../assets/img/dress2.jpg";
import dress3 from "../assets/img/dress3.jpg";


const Slider = () => {
  return (
    <div className="container">
      <Carousel>
    <div className='carusel-div'>
       <img src={dress3} alt="" />  
    </div>
    <div className='carusel-div'>
      <img src={dress2} alt="" />
      
    </div>
    <div  className='carusel-div'>
     
    <img src={dress1} alt="" /> 
    </div>
</Carousel>
    </div>
  )
}

export default Slider