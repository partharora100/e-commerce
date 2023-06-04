import modules from "./CategoryCard.module.css";
import { Link } from "react-router-dom";
const CategoryCard = ({
  categoryName,
  description,
  id,
  productNumber,
  image,
}) => {
  return (
    <div className={modules.categoryCard}>
      <div className={modules.categoryImage}>
        <img alt="category" src={image} />
      </div>

      <h3 className={modules.categoryHeading}>{categoryName}</h3>
      <p className={modules.categoryNumber}>{productNumber} Products</p>
      <p className={modules.categoryDescription}>{description}</p>

      <Link to={`/category/${categoryName}`}>
        <button className={modules.categoryButton}>SHOP NOW</button>
      </Link>
    </div>
  );
};

export default CategoryCard;
