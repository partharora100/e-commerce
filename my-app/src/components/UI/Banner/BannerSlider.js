import React, { useEffect, useState } from "react";
import modules from "./BannerSlider.module.css";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const images = [
  "https://images.ctfassets.net/66mrrren2unf/6OYpXFW0YTHWmZzyWCF0no/4bfe60a0186e0a0f5c6a2a409d8d5339/Website__2_.jpg?q=40",
  "https://images.ctfassets.net/66mrrren2unf/7BJyqeWvW40TwrsopaKRZy/2705d122f525086c3ae6fa769e31d122/Website.jpg?q=40",
  "https://images.ctfassets.net/66mrrren2unf/6pIatV1feT39E6rneTnxdx/21c10111caf135ee454b02d04b0524be/Desktop_-_Rice__2_.jpg?q=40",
];

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  /**
   * improve and understand the execution of the code
   * here
   * */

  // useEffect(() => {
  //   setTimeout(() => {
  //     nextSlide();
  //   }, 2500);
  // });

  return (
    <div className={modules.container}>
      <button className={modules.prev} onClick={previousSlide}>
        <ArrowBackIosNewIcon />
      </button>

      <img src={images[currentSlide]} alt="Slide" />

      <button className={modules.next} onClick={nextSlide}>
        <ArrowForwardIosIcon />
      </button>
    </div>
  );
};

export default BannerSlider;
