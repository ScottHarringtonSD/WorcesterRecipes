import React from "react";
import Slider from "react-slick";
import example from "../data/images/example.png";
import ChorizoChicken from "../data/images/ChorizoChicken.png";
import Salmon from "../data/images/Salmon.png";
import Paella from "../data/images/Paella.png";
import Sludge from "../data/images/Sludge.png";
import Toad from "../data/images/Toad.png";
import Shakshuka from "../data/images/Shakshuka.png";

function RecipeImageCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 500,
    cssEase: "linear",
  };
  return (
    <div className="slider-container pt-3">
      <Slider {...settings}>
        <div>
          <img
            src={ChorizoChicken}
            alt="Food"
            className=" h-64 w-full object-cover"
          />
        </div>
        <div>
          <img src={Salmon} alt="Food" className=" h-64 w-full object-cover" />
        </div>
        <div>
          <img src={Paella} alt="Food" className=" h-64 w-full object-cover" />
        </div>
        <div>
          <img src={Toad} alt="Food" className=" h-64 w-full object-cover" />
        </div>
        <div>
          <img
            src={Shakshuka}
            alt="Food"
            className=" h-64 w-full object-cover"
          />
        </div>
        <div>
          <img src={Sludge} alt="Food" className=" h-64 w-full object-cover" />
        </div>
        <div>
          <img src={example} alt="Food" className=" h-64 w-full object-cover" />
        </div>
      </Slider>
    </div>
  );
}

export default RecipeImageCarousel;
