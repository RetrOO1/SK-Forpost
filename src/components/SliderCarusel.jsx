import React from "react";
import "../styles/SliderCarusel.css";
import "/node_modules/slick-carousel/slick/slick.css"; 
import "/node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SliderCarusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed:  300,
    slidesToShow: 1,
    slidesToScroll: 1
  };
     

  return (
    <Slider className="slider" {...settings}>
      {[...Array(5)].map((_, i) => 
      <img src="https://sun9-31.userapi.com/impg/4bjTgMCmAymmHDk1ecw4w2SmVGIMgqYXIXVN4w/_nG-OVY4fpo.jpg?size=178x125&quality=96&sign=7c557c81c6ffba12557c32fba7d8aced&type=album" alt=""></img>
      )}
    </Slider>
  )
}

export default SliderCarusel