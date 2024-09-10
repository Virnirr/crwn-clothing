import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";


export const CategoryContext = createContext({
  categoriesMap: {},
  setProducts: () => null
})

export const CategoryProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoriesMap);
    }
    getCategoriesMap();
  }, []);

  const value = { categoriesMap, setCategoriesMap };

  return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>;
}