import { useContext } from "react";
import modules from "./WishlistContainer.module.css";
import WishlistContext from "../../../contexts/wishlist-context";
import WishlistCard from "../WishlistCard/WishlistCard";

const WishlistContainer = () => {
  const { data } = useContext(WishlistContext);
  console.log(data);
  return (
    <>
      {data.map((item) => {
        return <WishlistCard data={item} />;
      })}
    </>
  );
};

export default WishlistContainer;
