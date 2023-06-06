import React, { useContext } from "react";
import modules from "./ProductCard.module.css";
import { Link, useNavigate } from "react-router-dom";
import CartContext from "../../../contexts/cart-context";
import AuthContext from "../../../contexts/auth-context";
import WishlistContext from "../../../contexts/wishlist-context";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
const ProductCard = ({ product }) => {
  const {
    _id,
    title,
    bestseller,
    quantity,
    tags,
    price,
    rating,
    reviews,
    categoryName,
    image,
  } = product;
  console.log(_id);

  const navigate = useNavigate();
  const { onAdd, onCheckCart } = useContext(CartContext);
  const { isLogin } = useContext(AuthContext);
  const {
    onAdd: onAddWishlist,
    onCheckWishlist,
    onDelete: wishlistDeleteHandler,
  } = useContext(WishlistContext);

  const itemInCart = onCheckCart(product);
  const itemInWishlist = onCheckWishlist(product);
  // eithrt false or we get the id of the product

  const cartAddHandler = () => {
    // need to set a check using itemInCart
    if (isLogin) {
      onAdd({ _id, title, tags, rating, price, reviews, categoryName, image });
    } else {
      navigate("/account?mode=login");
    }
  };

  const wishlistAddHandler = () => {
    if (isLogin) {
      onAddWishlist(product);
    } else {
      navigate("/account?mode=login");
    }
  };

  return (
    <div className={modules.productCard}>
      <div className={modules.productImage}>
        <img alt="product" src={image} />
      </div>
      <h3>{title}</h3>
      <p className={modules.data}>
        {quantity} • {rating} ({reviews} reviews)
      </p>
      <p className={modules.tags}>{tags}</p>

      <div className={modules.actions}>
        <Link to={`/product/${_id}`}>
          <button className={modules.secondaryButton}>View Product</button>
        </Link>

        {!itemInCart && (
          <button onClick={cartAddHandler} className={modules.primaryButton}>
            Add To Cart
          </button>
        )}
        {itemInCart && isLogin && (
          <button className={modules.secondaryButton}>GO TO CART</button>
        )}
      </div>

      <div className={modules.wishlist}>
        {!itemInWishlist && (
          <button onClick={wishlistAddHandler}>
            <FavoriteBorderIcon />
          </button>
        )}

        {isLogin && itemInWishlist && (
          <button onClick={wishlistDeleteHandler}>
            <FavoriteIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
