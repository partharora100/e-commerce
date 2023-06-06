import modules from "./CartCard.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { red } from "@mui/material/colors";
import { useContext } from "react";
import CartContext from "../../../contexts/cart-context";

const CartCard = ({ cartItem }) => {
  const { onUpdate, onDelete } = useContext(CartContext);

  const cartDecrementHandler = () => {
    if (cartItem.qty === 1) {
      return onDelete(cartItem._id);
    }
    return onUpdate("decrement", cartItem._id);
  };

  return (
    <>
      <div className={modules.card}>
        <div className={modules.cardImage}>
          <img alt="cart-product" src={cartItem.image} />
        </div>

        <div className={modules.cardDeatils}>
          <h4>{cartItem.title}</h4>
          <p className={modules.quantity}>300ml</p>
          <p className={modules.price}>{cartItem.price}/unit</p>

          <div className={modules.actions}>
            <button
              onClick={() => {
                onUpdate("increment", cartItem._id);
              }}
            >
              <AddIcon fontSize="large" />
            </button>
            <p>{cartItem.qty}</p>
            <button onClick={cartDecrementHandler}>
              <RemoveIcon fontSize="large" />
            </button>
          </div>
          <div className={modules.delete}>
            <DeleteIcon
              onClick={() => {
                onDelete(cartItem._id);
              }}
              sx={{ color: red[800] }}
              fontSize="large"
              className={modules.deleteIcon}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCard;
