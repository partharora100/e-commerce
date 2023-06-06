import { useContext } from "react";
import CartCard from "../CartCard/CartCard";
import modules from "./CartContainer.module.css";
import CartContext from "../../../contexts/cart-context";

const CartContainer = () => {
  const cartCtx = useContext(CartContext);
  const data = cartCtx.data;

  let cartEmpty = data.length === 0 ? true : false;

  return (
    <div className="container-100">
      <div className={modules.cartContainer}>
        <div className={modules.left}>
          {cartEmpty && <h1>The cart is empty</h1>}
          {!cartEmpty &&
            data.map((cartItem) => {
              console.log(cartItem);
              return <CartCard cartItem={cartItem} />;
            })}
        </div>
        <div className={modules.right}></div>
      </div>
    </div>
  );
};

export default CartContainer;
