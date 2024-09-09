import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  cartTotal: 0,
  removeItemFromCart: () => {},
  removeEntireItemFromCart: () => {},
});

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

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setCartCount(
      cartItems.reduce((total, cardItem) => total + cardItem.quantity, 0)
    );
  }, [cartItems]);

  useEffect(() => {
    setCartTotal(
      cartItems.reduce(
        (total, cardItem) => total + cardItem.price * cardItem.quantity,
        0
      )
    );
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const removeEntireItemFromCart = (productToRemove) => {
    setCartItems(removeEntireCartItem(cartItems, productToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    removeItemFromCart,
    removeEntireItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
