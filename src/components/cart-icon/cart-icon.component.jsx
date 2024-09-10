import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import "./cart-icon.styles";

import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCountContainer,
} from "./cart-icon.styles";

const CartIcon = () => {
  const { cartCount, setIsCartOpen } = useContext(CartContext);

  return (
    <CartIconContainer
      onClick={() => setIsCartOpen((prev) => !prev)}
    >
      <ShoppingIconContainer />
      <ItemCountContainer>{cartCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

export default CartIcon;
