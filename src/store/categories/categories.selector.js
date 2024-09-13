import { createSelector } from 'reselect';

// only give back the last slice of the state (calculated state) that is needed

// chain of calculations

// memoized selector
const selectCategoriesReducer = (state) => state.categories;


// if we have a complex state object, we can use reselect to memoize the selector
export const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categoriesSlice) => categoriesSlice.categories
)

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
)