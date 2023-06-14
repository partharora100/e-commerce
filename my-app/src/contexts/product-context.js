import React, { createContext, useEffect, useReducer } from "react";

import { ProductReducer, initState } from "../reducers/ProductReducer";

const ProductContext = createContext({
  data: [],
  clearFilters: () => {},
  productDispatch: () => {},
  product: {},
});

export const ProductContextProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(ProductReducer, initState);

  const getProducts = async () => {
    const response = await fetch("/api/products");
    const resData = await response.json();
    productDispatch({ type: "DISPLAY_PRODUCTS", payload: resData.products });
  };

  const clearFilters = () => {
    productDispatch({ type: "CLEAR_FILTERS" });
  };

  useEffect(() => {
    getProducts();
  }, []);

  // FILTER 1
  const searchFilteredProducts =
    productState?.searchInput?.length > 0
      ? productState?.products.filter(({ title }) =>
          title.toLowerCase().includes(productState?.searchInput.toLowerCase())
        )
      : productState?.products;

  // FILTER 2
  const sortFilteredProducts =
    productState.sortInput !== ""
      ? [...searchFilteredProducts].sort((a, b) =>
          productState?.sortInput === "LTH"
            ? a?.price - b?.price
            : b?.price - a?.price
        )
      : searchFilteredProducts;

  // FILTER 3
  const ratingFilteredProducts = sortFilteredProducts?.filter(
    ({ rating }) => rating >= productState?.ratingInput
  );

  // FILTER 4
  // understand how some and every works in Javascript here
  // here I am using some
  // understand the application how we can use that to get what we want / the way we want to change our data in the array
  const categoryFilteredProducts =
    productState?.categoryInput.length > 0
      ? ratingFilteredProducts?.filter((product) =>
          productState?.categoryInput.some((category) =>
            product.categoryName.includes(category)
          )
        )
      : ratingFilteredProducts;

  return (
    <ProductContext.Provider
      value={{
        data: categoryFilteredProducts,
        clearFilters,
        productDispatch,
        productState,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
