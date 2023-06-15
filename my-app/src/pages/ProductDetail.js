import React from "react";
import ProductDetailContainer from "../components/ProductComponents/ProductDetailContainer/ProductDetailContainer";
// import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  // const { productID } = useParams();

  return (
    <div className="container-100">
      {/* <h1>This is Product Detail page</h1>
      <h1>{productID}</h1> */}
      <ProductDetailContainer />
    </div>
  );
};

export default ProductDetailPage;
