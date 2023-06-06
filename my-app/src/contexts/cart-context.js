import React, { createContext, useContext, useEffect, useState } from "react";
// import { getCart } from "../services/cartService";
import AuthContext from "./auth-context";

const CartContext = createContext({
  data: [],
  onAdd: () => {},
  onDelete: () => {},
  onUpdate: () => {},
  onCheckCart: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  useEffect(() => {
    fetch("/api/user/cart", {
      method: "GET",
      headers: {
        authorization: token,
      },
    })
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data.cart);
        setCartData(data.cart);
      });
  }, [token]);

  // getting the cart here
  const getCartHandler = async () => {};

  // addCartHandler
  const addCartHandler = async (product) => {
    const response = await fetch("/api/user/cart", {
      method: "POST",
      headers: {
        authorization: token,
      },
      body: JSON.stringify({ product }),
    });

    const resData = await response.json();
    setCartData(resData.cart);
  };

  // updateCartHandler
  const updateCartHandler = async (type, productID) => {
    const response = await fetch("/api/user/cart/" + productID, {
      method: "POST",
      headers: {
        authorization: token,
      },
      body: JSON.stringify({
        action: {
          type: type,
        },
      }),
    });

    const resData = await response.json();

    setCartData(resData.cart);
  };

  // deleteCartHandler
  const deleteCartHandler = async (productID) => {
    const response = await fetch("/api/user/cart/" + productID, {
      method: "DELETE",
      headers: {
        authorization: token,
      },
    });

    const resData = await response.json();
    setCartData(resData.cart);
  };

  /**
   * writing a function to know whether the product is in the cart or not
   * This will get the product here an check whether the product is in the Cart
   */

  const checkItemInCart = (data) => {
    console.log(data);
    const product = cartData.find((p) => p._id === data._id);
    console.log("Checkking whether in Cart");
    console.log(product);

    if (product?._id ? true : false) {
      return product._id;
    } else {
      return false;
    }
  };
  return (
    <CartContext.Provider
      value={{
        data: cartData,
        onAdd: addCartHandler,
        onUpdate: updateCartHandler,
        onDelete: deleteCartHandler,
        onCheckCart: checkItemInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

export const useCart = () => useContext(CartContext);
