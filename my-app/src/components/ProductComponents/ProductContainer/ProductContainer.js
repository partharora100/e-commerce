import modules from "./ProductContainer.module.css";
import ProductCard from "../ProductCard/ProductCard";
import ProductFilter from "../ProductFilter/ProductFilter";

const ProductContainer = ({ data }) => {
  return (
    <main className={modules.container}>
      <div className={modules.filterBox}>
        <ProductFilter />
      </div>
      <div className={modules.productBox}>
        {data.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </main>
  );
};

export default ProductContainer;
