import SHOP_DATA from '../shop-data.json';
import { createContext, useState, useEffect } from "react";


export const ProductContext = createContext({
  products: [],
  setProducts: () => null
})

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products, setProducts };

  useEffect(() => {
    setProducts(SHOP_DATA);
  }, []);

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
}