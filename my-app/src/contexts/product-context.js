import React, { createContext, useEffect, useReducer, useState } from "react";

import { ProductReducer, initState } from "../reducers/ProductReducer";

const ProductContext = createContext({
  data: [],
  filteredProducts: [],
  clearFilters: () => {},
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

  const filterProductsByCategory = (string) => {
    const filteredData = productState.products.filter(
      (product) => product.categoryName === string
    );
    console.log(string);
    productDispatch({
      type: "FILTER_PRODUCTS",
      payload: filteredData,
      string: string,
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        data: productState.products,
        filteredData: productState.filteredProducts,
        filterProductsByCategory,
        clearFilters,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
