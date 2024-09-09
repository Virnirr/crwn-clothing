import "./checkout-item.styles.scss";
import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { addItemToCart, removeItemFromCart, removeEntireItemFromCart } =
    useContext(CartContext);

  const addItem = () => addItemToCart(cartItem);
  const removeItem = () => removeItemFromCart(cartItem);
  const removeEntireItem = () => removeEntireItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItem}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItem}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={removeEntireItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
