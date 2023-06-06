import React, { useContext } from "react";
import AuthContext from "../contexts/auth-context";
import CartContext from "../contexts/cart-context";
import CartContainer from "../components/CartComponents/CartContainer/CartContainer";

const CartPage = () => {
  const { isLogin } = useContext(AuthContext);
  // const { data: cartData } = useContext(CartContext);

  return (
    <div>
      {isLogin && <CartContainer />}

      {!isLogin && <h1>Ask the user to login ya signup</h1>}
    </div>
  );
};

export default CartPage;
