import { CART_ACTION_TYPES } from "./cart.types";
import {
  createAction,
  ActionWithPayload,
} from "../../utils/reducer.utils";
import { withMatcher } from "../../utils/reducer.utils";
import { CartItem } from "./cart.types";

export type SetIsCartOpen = ActionWithPayload<
  CART_ACTION_TYPES.SET_IS_CART_OPEN,
  boolean
>;

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;

export type CartItemsActions = (
  cartItems: CartItem[],
  product: CartItem
) => CartItem[];

export const setIsCartOpen = withMatcher(
  (boolean: boolean): SetIsCartOpen =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)
);

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

export const addItemToCart = (
  cartItems: CartItem[],
  productToAdd: CartItem
): SetCartItems => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const removeItemFromCart = (
  cartItems: CartItem[],
  productToRemove: CartItem
): SetCartItems => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return setCartItems(newCartItems);
};

const removeEntireCartItem = (cartItems: CartItem[], productToRemove: CartItem) => {
  // return new array where cartItem does not have the same id as productToRemove
  return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
};

export const removeEntireItemFromCart =
  (cartItems: CartItem[], productToRemove: CartItem) => {
    const newCartItems = removeEntireCartItem(cartItems, productToRemove);
    return setCartItems(newCartItems);
  };

const addCartItem: CartItemsActions = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // if found, icnrement quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      if (cartItem.id === productToAdd.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
  }

  // if not found, add new item to cartItems
  return [...cartItems, { ...productToAdd, quantity: 1 }];

  // return new array wtih modified cartItems / new cart items
};

const removeCartItem: CartItemsActions = (cartItems, productToRemove) => {
  // find if cartItems contains productToRemove
  const existingCartItem = cartItems.map((cartItem) => {
    return cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem;
  });

  // return new array where cartItem has a quantity > 0
  return existingCartItem.filter((cartItem) => cartItem.quantity > 0);
};