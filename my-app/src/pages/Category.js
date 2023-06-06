import React from "react";
import { useParams } from "react-router";
import CategoryHead from "../components/CategoryComponents/CategoryHead/CategoryHead";
import CategoryContainer from "../components/CategoryComponents/CategoryContainer/CategoryContainer";

const CategoryPage = () => {
  const { categoryName } = useParams();
  return (
    <>
      <div className="container-140">
        <CategoryHead categoryHead={categoryName} />
        <CategoryContainer categoryHead={categoryName} />
      </div>
    </>
  );
};

export default CategoryPage;
