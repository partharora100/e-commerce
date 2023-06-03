import React from "react";
import modules from "./Banner.module.css";

const Banner = () => {
  return (
    <>
      <img
        className={modules.banner}
        src="https://images.ctfassets.net/66mrrren2unf/6cajvfjB8ZwHgprlQbWaQP/ead0085b890a9f6f761a08e8e6875423/Mobile.jpg?fit=scale&w=400&h=200"
        alt="banner"
      />
    </>
  );
};

export default Banner;
