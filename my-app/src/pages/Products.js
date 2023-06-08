import React, { useContext } from "react";

import ProductContext from "../contexts/product-context";
import ProductContainer from "../components/ProductComponents/ProductContainer/ProductContainer";

const ProductPage = () => {
  const { filteredData, data } = useContext(ProductContext);

  if (!filteredData) {
    return <div>Loading..</div>;
  }

  return (
    <>
      <div className="container-140">
        <ProductContainer data={filteredData} />
      </div>
    </>
  );
};

export default ProductPage;
