import React, { useContext } from "react";
import CategoryContext from "../contexts/category-cotext";
// import Banner from "../components/UI/Banner/Banner";
import ShopCategory from "../components/UI/ShopCategory/ShopCategory";
import BannerSlider from "../components/UI/Banner/BannerSlider";

const HomePage = () => {
  const ctx = useContext(CategoryContext);

  if (!ctx.data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container-140">
        <BannerSlider />
        <ShopCategory category={ctx.data} />
      </div>
    </>
  );
};

export default HomePage;
