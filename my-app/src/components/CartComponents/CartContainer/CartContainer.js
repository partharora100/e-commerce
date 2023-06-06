import { useContext } from "react";
import CartCard from "../CartCard/CartCard";
import modules from "./CartContainer.module.css";
import CartContext from "../../../contexts/cart-context";

const CartContainer = () => {
  const cartCtx = useContext(CartContext);
  const data = cartCtx.data;
  console.log(data);

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
        <div className={modules.right}>
          <h3>Cart Summary</h3>

          <div className={modules.cartDeatils}>
            {data.map((cartItem) => {
              return (
                <div className={modules.cartDetailCard}>
                  <div>
                    <h4>{cartItem.title}</h4>
                    <p>
                      ₹ {cartItem.price}/unit * {cartItem.qty}
                    </p>
                  </div>

                  <p>₹ {cartItem.price * cartItem.qty}</p>
                </div>
              );
            })}
          </div>

          <div>
            <p>TOTAL {cartCtx.cartTotal}</p>
          </div>

          <button className="">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
