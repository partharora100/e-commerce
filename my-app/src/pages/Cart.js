import React, { useContext } from "react";
import AuthContext from "../contexts/auth-context";
import CartContainer from "../components/CartComponents/CartContainer/CartContainer";

const CartPage = () => {
  const { isLogin } = useContext(AuthContext);
  // const cartCtx = useContext(CartContext);

  return (
    <div>
      {isLogin && <CartContainer />}
      {/* {isLogin && cartIsEmpty && show continue shopping} */}
      {!isLogin && <h1>Ask the user to login ya signup</h1>}
    </div>
  );
};

export default CartPage;
