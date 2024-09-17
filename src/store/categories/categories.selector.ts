import { createSelector } from "reselect";

import { CategoriesState } from "./categories.reducer";
import { CategoryMap } from "./categories.types";

import { RootState } from "../store";

// only give back the last slice of the state (calculated state) that is needed

// chain of calculations

// memoized selector
const selectCategoriesReducer = (state: RootState): CategoriesState =>
  state.categories;

// if we have a complex state object, we can use reselect to memoize the selector
export const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);
