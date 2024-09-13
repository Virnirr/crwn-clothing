import {
  ImageContainer,
  CheckoutItemContainer,
  RemoveButton,
  Quantity,
  Price,
  Name,
  Arrow,
  Value,
} from "./checkout-item.styles";

import { useDispatch, useSelector} from "react-redux";
import { addItemToCart, removeItemFromCart, removeEntireItemFromCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

const CheckoutItem = ({ cartItem }) => {

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, imageUrl, price, quantity } = cartItem;

  const addItem = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItem = () => dispatch(removeItemFromCart(cartItems, cartItem));
  const removeEntireItem = () => dispatch(removeEntireItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={removeItem}>
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItem}>
          &#10095;
        </Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={removeEntireItem}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
