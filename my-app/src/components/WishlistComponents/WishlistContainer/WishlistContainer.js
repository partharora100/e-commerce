import { useContext } from "react";
import modules from "./WishlistContainer.module.css";
import WishlistContext from "../../../contexts/wishlist-context";
import WishlistCard from "../WishlistCard/WishlistCard";

const WishlistContainer = () => {
  const { data } = useContext(WishlistContext);
  return (
    <div className={modules.container}>
      {data.map((item) => {
        return <WishlistCard data={item} />;
      })}
    </div>
  );
};

export default WishlistContainer;
