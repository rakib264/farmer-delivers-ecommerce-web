import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { caroselImg } from './data.js';

const Carosel = () => {
  return (
    <div className='container pt-1 mb-20 h-[280px] '>
      <Carousel
       autoPlay={true}
       cycleNavigation={true}
       stopAutoPlayOnHover={true}
       interval={3000}
       animation="fade"
       navButtonsAlwaysVisible={true}
       indicators={false}
       navButtonsProps={
         {
          style:{
           background: "bg-white",
           color: "bg-gray-800"
          }
         }
       }
      >
        {
          caroselImg.map((data, index) => (
            <img src={data.url} className='w-full h-[350px] sm:object-contain md:object-cover' alt="carosel-image" key={index} />
          ))
        }
      </Carousel>
    </div>
  )
}

export default Carosel;