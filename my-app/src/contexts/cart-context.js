import React, { createContext, useContext, useEffect, useState } from "react";
// import { getCart } from "../services/cartService";
import AuthContext from "./auth-context";
import { toast } from "react-toastify";

const CartContext = createContext({
  data: [],
  onAdd: () => {},
  onDelete: () => {},
  onUpdate: () => {},
  onCheckCart: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const { token, isLogin } = useContext(AuthContext);

  useEffect(() => {
    fetch("/api/user/cart", {
      method: "GET",
      headers: {
        authorization: token,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCartData(data.cart);
      });
  }, [token]);

  /****** CART HANDLERS ******* */
  /**
   * CAN I PUT THIS USE EFFECT FUNCTIONALITY IN getCartHandler
   */
  const getCartHandler = async () => {};

  const addCartHandler = async (product) => {
    const response = await fetch("/api/user/cart", {
      method: "POST",
      headers: {
        authorization: token,
      },
      body: JSON.stringify({ product }),
    });

    if (response.status === 201) {
      const resData = await response.json();

      toast.success("CART UPDATEDD"); // 2 notications
      setCartData(resData.cart);
    }
  };

  const updateCartHandler = async (type, productID) => {
    console.log("This is hittinh");
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

  const deleteCartHandler = async (productID) => {
    const response = await fetch("/api/user/cart/" + productID, {
      method: "DELETE",
      headers: {
        authorization: token,
      },
    });

    const resData = await response.json();
    toast.error("ITEM DELETED FROM CART");
    setCartData(resData.cart);
  };

  /**
   * This Returns false if the item is not in the cart and recieves the data from PRODUCt CARD COMPONENT
   */

  const checkItemInCart = (data) => {
    if (!isLogin) {
      return false;
    }

    // console.log(data);
    const product = cartData.find((p) => p._id === data._id);
    // console.log("Checkking whether in Cart");
    // console.log(product);

    if (product?._id ? true : false) {
      return product._id;
    } else {
      return false;
    }
  };

  const cartTotal = cartData
    ?.map((cartItem) => {
      return cartItem.qty * cartItem.price;
    })
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);

  const cartItem = cartData?.length;

  return (
    <CartContext.Provider
      value={{
        data: cartData,
        onAdd: addCartHandler,
        onUpdate: updateCartHandler,
        onDelete: deleteCartHandler,
        onCheckCart: checkItemInCart,
        cartTotal: cartTotal,
        cartNumber: cartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

export const useCart = () => useContext(CartContext);
