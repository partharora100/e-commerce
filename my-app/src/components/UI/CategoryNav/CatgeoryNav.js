import React, { useContext } from "react";
import modules from "./CategoryNav.module.css";
import { Link } from "react-router-dom";
import CategoryContext from "../../../contexts/category-cotext";

const CategoryNav = () => {
  const ctx = useContext(CategoryContext);

  if (!ctx.data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <nav className={modules.categoryNav}>
        {ctx.data.map((category) => {
          return (
            <li>
              <Link to={`category/${category.categoryName}`}>
                {category.categoryName}
              </Link>
            </li>
          );
        })}
      </nav>
    </>
  );
};

export default CategoryNav;
