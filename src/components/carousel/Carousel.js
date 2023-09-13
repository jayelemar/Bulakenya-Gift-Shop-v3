import React, { useEffect, useState } from 'react'
import image1 from '../../assets/wood-oval-brush-removebg-preview.png'
import image2 from '../../assets/wood-pen-removebg-preview.png'
import image3 from '../../assets/wood-pen-removebg-preview.png'


const Carousel = () => {


    return (
        <div className="carousel">
            <div className="carousel-item box-border w-100%">
                <img src={image1} alt="oval-brush" />
            </div>
          
        </div>
      );
}

export default Carousel
