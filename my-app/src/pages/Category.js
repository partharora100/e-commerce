import React from "react";
import { useParams } from "react-router";

const CategoryPage = () => {
  const { categoryName } = useParams();
  return (
    <div>
      <h1>This is the category Page</h1>
      <h1>{categoryName}</h1>
    </div>
  );
};

export default CategoryPage;
