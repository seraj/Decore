import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ThemeContext } from "styled-components";

import StyledCarousel from "./styled/StyledCarousel";
import CarouselProps from "./Carousel.props";

const Carousel: React.FC<CarouselProps> = ({ children, ...props }) => {
  const theme = React.useContext(ThemeContext);

  const decoreSettings = {
    arrows: true,
    dots: true,
    draggable: true,
    swipe: true,
    speed: theme.animations.slider.speed,
    autoplaySpeed: theme.animations.slider.autoplaySpeed
  };

  return (
    <Slider {...decoreSettings} {...props}>
      {children}
    </Slider>
  );
};

export default Carousel;
