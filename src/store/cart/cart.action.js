import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer.utils";

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {cartItems: newCartItems});
};

export const removeItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {cartItems: newCartItems});
};

export const removeEntireItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeEntireCartItem(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {cartItems: newCartItems});
};

const addCartItem = (cartItems, productToAdd) => {
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

const removeCartItem = (cartItems, productToRemove) => {
  // find if cartItems contains productToRemove
  const existingCartItem = cartItems.map((cartItem) => {
    return cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem;
  });

  // return new array where cartItem has a quantity > 0
  return existingCartItem.filter((cartItem) => cartItem.quantity > 0);
};

const removeEntireCartItem = (cartItems, productToRemove) => {
  // return new array where cartItem does not have the same id as productToRemove
  return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
};
