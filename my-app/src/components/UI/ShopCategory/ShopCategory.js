import CategoryCard from "../../HomeComponents/CatgegoryCard";
import modules from "./ShopCategory.module.css";

const ShopCategory = ({ category }) => {
  // console.log("This is coming from the Shop Category");
  // console.log(filteredProducts);

  return (
    <div className={modules.category}>
      <h2 className={modules.title}>Shop By Catgegories</h2>

      <div className={modules.container}>
        {category.map((c) => (
          <CategoryCard {...c} />
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;
