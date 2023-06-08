import { useContext, useState } from "react";
import modules from "./Search.module.css";
import ProductContext from "../../../../contexts/product-context";

const Search = () => {
  const { searchProducts } = useContext(ProductContext);
  const [searchEntered, setSearchEntered] = useState("");

  const searchHandler = (e) => {
    console.log(e.target.value);
    searchProducts(e.target.value);
  };

  return (
    <div>
      <input
        className={modules.search}
        onChange={searchHandler}
        placeholder="search products"
      />
    </div>
  );
};

export default Search;
