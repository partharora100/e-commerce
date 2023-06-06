import React from "react";
import modules from "./CategoryHead.module.css";

const CategoryHead = ({ categoryHead }) => {
  return (
    <div className={modules.categoryHead}>
      <h1>Shop Our {categoryHead} Products</h1>
      {/* <div className={modules.container}></div> */}
    </div>
  );
};

export default CategoryHead;
