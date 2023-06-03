import React, { useContext } from "react";
import modules from "./CategoryNav.module.css";
import { Link } from "react-router-dom";

const CategoryNav = ({ data }) => {
  return (
    <>
      <nav className={modules.categoryNav}>
        {data.map((category) => {
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
