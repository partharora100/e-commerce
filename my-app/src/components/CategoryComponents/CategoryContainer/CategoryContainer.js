import modules from "./CategoryContainer.module.css";
import ProductCard from "../ProductCard/ProductCard";
import { useContext } from "react";
import ProductContext from "../../../contexts/product-context";

const CategoryContainer = ({ categoryHead: categoryName }) => {
  const ctx = useContext(ProductContext);

  if (!ctx.data) {
    return <div>Loading data...</div>;
  }

  const filteredProducts = ctx.data.filter((product) => {
    return product.categoryName === categoryName;
  });

  return (
    <div className={modules.container}>
      {filteredProducts.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default CategoryContainer;
