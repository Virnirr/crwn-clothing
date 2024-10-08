import { createSelector } from "reselect";
import { CartState } from "./cart.reducer";
import { RootState } from "../store";

const selectCartReducer = (state: RootState): CartState => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

// if we have a complex state object, we can use reselect to memoize the selector
export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((total, cardItem) => total + cardItem.quantity, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (total, cardItem) => total + cardItem.price * cardItem.quantity,
      0
    )
);
