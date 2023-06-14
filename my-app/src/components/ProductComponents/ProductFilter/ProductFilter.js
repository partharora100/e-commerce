import { useContext } from "react";
import ProductContext from "../../../contexts/product-context";
import modules from "./ProductFilter.module.css";
import CategoryContext from "../../../contexts/category-cotext";

const ProductFilter = () => {
  const { data, clearFilters, productDispatch, productState } =
    useContext(ProductContext);
  const { data: categoryData } = useContext(CategoryContext);

  if (!data || !categoryData) {
    return <div>Loading</div>;
  }

  const categories = categoryData?.map((category) => category.categoryName);

  const activeCategoryFilters = productState.categoryInput;
  const activeCategoryBoolean = activeCategoryFilters.length === 0;

  const checkboxFilterHandler = (e) => {
    console.log(e.target.value);
    productDispatch({ type: "FILTER_PRODUCTS", payload: e.target.value });
  };

  const clearFilterHandler = () => {
    clearFilters();
  };

  const sortHandler = (string) => {
    productDispatch({ type: "SORT", payload: string });
  };

  return (
    <div className={modules.filter}>
      <div className={modules.filterHead}>
        <h3>Filters</h3>
        <button disabled={activeCategoryBoolean} onClick={clearFilterHandler}>
          Clear Filters
        </button>
      </div>

      <div className={modules.filterSection}>
        <h4>Sort By Price</h4>
        <div className={modules.sortPrice}>
          <button onClick={() => sortHandler("LTH")}>Low To High</button>
          <button onClick={() => sortHandler("HTL")}>High To Low</button>
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
          {categories.map((category) => (
            <label className={modules.checkbox}>
              <input
                type="checkbox"
                value={category}
                onChange={checkboxFilterHandler}
                checked={productState.categoryInput.includes(category)}
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
