import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './flick.css'
import SliderComponent from "./SliderComponent";
import { SliderComponentDATA } from "../../DATA.js"
export default function Flick() {
  var settings = {
    dotsClass:"slick-dots",
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <>
    <div className="flickMAINtEXT">
              <p >What out clients say</p>
    </div>
        <div className="slider-container">
      <Slider {...settings}>
        <div>
        <SliderComponent 
            img={SliderComponentDATA[0].img}
            data={SliderComponentDATA[0].data}
            name={SliderComponentDATA[0].name}
            description={SliderComponentDATA[0].description}
          />
        </div>
        <div>
        <SliderComponent 
            img={SliderComponentDATA[1].img}
            data={SliderComponentDATA[1].data}
            name={SliderComponentDATA[1].name}
            description={SliderComponentDATA[1].description}
          />
        </div>
        <div>
        <SliderComponent 
            img={SliderComponentDATA[2].img}
            data={SliderComponentDATA[2].data}
            name={SliderComponentDATA[2].name}
            description={SliderComponentDATA[2].description}
          />
        </div>
        <div>
        <SliderComponent 
            img={SliderComponentDATA[3].img}
            data={SliderComponentDATA[3].data}
            name={SliderComponentDATA[3].name}
            description={SliderComponentDATA[3].description}
          />
        </div>
        <div>
        <SliderComponent 
            img={SliderComponentDATA[4].img}
            data={SliderComponentDATA[4].data}
            name={SliderComponentDATA[4].name}
            description={SliderComponentDATA[4].description}
          />
        </div>
        <div>
        <SliderComponent 
            img={SliderComponentDATA[5].img}
            data={SliderComponentDATA[5].data}
            name={SliderComponentDATA[5].name}
            description={SliderComponentDATA[5].description}
          />
        </div>
      </Slider>
          </div></>
  );
    }
    
    
  
