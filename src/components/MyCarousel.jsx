import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import React from 'react'

const MyCarousel = () => {
  return (
    <>
    <Carousel>
                <div>
                    <img src="./1.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="./2.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="./3.webp" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    
    </>

  )
}

export default MyCarousel