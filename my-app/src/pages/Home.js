import React, { useContext } from "react";
import CategoryContext from "../contexts/category-cotext";
import Banner from "../components/UI/Banner/Banner";
import ShopCategory from "../components/UI/ShopCategory/ShopCategory";
import ProductContext from "../contexts/product-context";

const HomePage = () => {
  const ctxCategory = useContext(CategoryContext);
  const ctxProduct = useContext(ProductContext);

  if (!ctxCategory.data || !ctxProduct.data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Banner />

      <div className="container-140">
        <ShopCategory products={ctxProduct.data} />
      </div>
    </>
  );
};

export default HomePage;
