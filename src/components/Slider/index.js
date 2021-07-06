import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.css";

const DemoCarousel =()=>{
    
    return (
        <Carousel infiniteLoop={true} useKeyboardArrows autoPlay showThumbs={false} showIndicators={true}>
            <div>
                <img src="img-01.jpg" alt="carousel01"/>             
            </div>
            <div>
                <img src="img-02.jpg"  alt="carousel02"/>                
            </div>
            <div>
                <img src="img-03.jpg"  alt="carousel03"/>               
            </div>
            <div>
                <img src="img-04.jpg"  alt="carousel04"/>             
            </div>
           
        </Carousel>
    );
}

export default  DemoCarousel;