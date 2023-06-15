import React, { useEffect, useState, useContext } from "react";
import modules from "./ProductDetailContainer.module.css";
import { useNavigate, useParams } from "react-router";
import CartContext from "../../../contexts/cart-context";
import WishlistContext from "../../../contexts/wishlist-context";
import AuthContext from "../../../contexts/auth-context";

const ProductDetailContainer = () => {
  const navigate = useNavigate();
  const { isLogin } = useContext(AuthContext);
  const { onCheckCart, onAdd: onAddCart } = useContext(CartContext);
  const { onCheckWishlist } = useContext(WishlistContext);

  const { productID } = useParams();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products/" + productID)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data.product);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading Product Data...</div>;
  }

  const itemInCart = onCheckCart(product);
  const itemInWishlist = onCheckWishlist(product);

  const cartAddHandler = () => {
    if (isLogin) {
      onAddCart(product);
    } else {
      navigate("/");
    }
  };

  const wishlistAddHandler = () => {
    if (isLogin) {
      // add to the cart
    } else {
      // navigate to the login page
    }
  };

  const wishlistRemoveHandler = () => {};

  return (
    <div className={modules.container}>
      <div className={modules.left}>
        <img src={product.image} alt="product" />
      </div>
      <div className={modules.right}>
        <div className={modules.head}>
          <div>
            <h1>{product.title}</h1>
            <p className={modules.qty}>{product.quantity}</p>
            <p className={modules.tags}>{product.tags}</p>
          </div>
          <div>
            {itemInWishlist && isLogin && (
              <button onClick={wishlistRemoveHandler}>ADDED</button>
            )}
            {!itemInWishlist && (
              <button onClick={wishlistAddHandler}>Wishlist</button>
            )}
          </div>
        </div>

        <div className={modules.flexBox}>
          <p className={modules.rating}>{product.rating}</p>
          <p className={modules.reviews}>({product.reviews} reviews)</p>
        </div>

        <p className={modules.price}>₹ {product.price}</p>

        <div className={modules.actions}>
          {itemInCart && isLogin && (
            <button className={modules.secondaryBtn}>GO THE CART</button>
          )}
          {!itemInCart && (
            <button className={modules.primaryBtn} onClick={cartAddHandler}>
              ADD TO CART
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailContainer;
