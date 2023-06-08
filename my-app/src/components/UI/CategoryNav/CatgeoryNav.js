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
        <li>
          <Link to="/products">ALL PRODUCTS</Link>
        </li>
        {ctx.data.map((category) => {
          return (
            <li className={modules.links}>
              <Link to={`/products`}>{category.categoryName}</Link>
            </li>
          );
        })}
      </nav>
    </>
  );
};

export default CategoryNav;
