import ProductCard from "../../ProductComponents/ProductCard/ProductCard";
import modules from "./WishlistCard.module.css";

const WishlistCard = ({ data }) => {
  return <ProductCard product={data} />;
};

export default WishlistCard;
