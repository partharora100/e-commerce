import { useState } from "react";
import modules from "./ShopCategory.module.css";

const ShopCategory = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  // console.log("This is coming from the Shop Category");
  // console.log(filteredProducts);

  return (
    <div className={modules.category}>
      <h2 className={modules.title}>Shop By [CategoryName]</h2>

      <div className={modules.container}></div>
    </div>
  );
};

export default ShopCategory;
