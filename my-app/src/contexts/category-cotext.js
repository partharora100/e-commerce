import React, { createContext, useEffect, useState } from "react";

const CategoryContext = createContext({
  data: [],
});

export const CategoryContextProvider = ({ children }) => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    fetch("/api/categories")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.categories);
        setCategories(data.categories);
      });
  }, []);

  return (
    <CategoryContext.Provider value={{ data: categories }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContext;
