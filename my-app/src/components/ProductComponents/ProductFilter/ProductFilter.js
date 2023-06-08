import { useContext } from "react";
import ProductContext from "../../../contexts/product-context";
import modules from "./ProductFilter.module.css";

const ProductFilter = () => {
  const { data, clearFilters, filterProductsByCategory } =
    useContext(ProductContext);

  if (!data) {
    return <div>Loading</div>;
  }

  const categories = data?.map((product) => product.categoryName);

  const getUniqueStrings = (arr) => {
    const uniqueSet = new Set(arr);
    const uniqueArr = [...uniqueSet];
    return uniqueArr;
  };

  const uniqueCategories = getUniqueStrings(categories);

  const checkboxFilterHandler = (e) => {
    console.log(e.target.value);
    filterProductsByCategory(e.target.value);
  };

  const clearFilterHandler = () => {
    clearFilters();
  };

  return (
    <div className={modules.filter}>
      <div className={modules.filterHead}>
        <h3>Filters</h3>
        <button onClick={clearFilterHandler}>Clear Filters</button>
      </div>

      <div className={modules.filterSection}>
        <h4>Sort By Price</h4>
        <div className={modules.sortPrice}>
          <button>Low To High</button>
          <button>High To Low</button>
        </div>
      </div>

      <div className={modules.filterSection}>
        <h4>Filter By Rating</h4>
        <div className="">
          <input type="range" min="0" max="5" value="1" />
        </div>
      </div>

      <div className={modules.filterSection}>
        <h4>Filter by Category</h4>
        <ul className={modules.checkboxContainer}>
          {uniqueCategories.map((category) => (
            <label className={modules.checkbox}>
              <input
                type="checkbox"
                value={category}
                onChange={checkboxFilterHandler}
              />
              {category}
            </label>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductFilter;
