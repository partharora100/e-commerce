import React, { createContext, useEffect, useState } from "react";

const ProductContext = createContext({
  data: [],
});

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.products);
        setProducts(data.products);
      });
  }, []);

  return (
    <ProductContext.Provider value={{ data: products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
