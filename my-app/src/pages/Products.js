import React, { useContext } from "react";

import ProductContext from "../contexts/product-context";
import ProductContainer from "../components/ProductComponents/ProductContainer/ProductContainer";
import Toast from "../components/UI/Toast/Toast";

const ProductPage = () => {
  const { data } = useContext(ProductContext);

  if (!data) {
    return <div>Loading..</div>;
  }

  return (
    <>
      <div className="container-140">
        <ProductContainer data={data} />
      </div>
    </>
  );
};

export default ProductPage;
