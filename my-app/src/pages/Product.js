import React, { useContext } from "react";
import { useParams } from "react-router";
import ProductContext from "../contexts/product-context";

const ProductPage = () => {
  const { productID } = useParams();
  console.log(productID);

  const ctx = useContext(ProductContext);

  if (!ctx.data) {
    return <div>Loading Data..</div>;
  }

  const [filteredData] = ctx.data.filter((p) => p._id === productID);

  return (
    <div>
      <div className="container-100">
        This is the Product Page
        {filteredData.title}
      </div>
    </div>
  );
};

export default ProductPage;
