import { createAction } from "../../utils/reducer.utils";
import { CATEGORIES_ACTION_TYPES, Category } from "./categories.types";
import { ActionWithPayload } from "../../utils/reducer.utils";
import { withMatcher } from "../../utils/reducer.utils";

// export type FetchCategoriesStart =
//   Action<CATEGORIES_ACTION_TYPES.SET_CATEGORIES>;

export type FetchCategoriesSuccess = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.SET_CATEGORIES,
  Category[]
>;

// export type FetchCategoriesFailed = ActionWithPayload<
//   CATEGORIES_ACTION_TYPES.SET_CATEGORIES,
//   string
// >;

export type CategoryAction = FetchCategoriesSuccess;

export const setCategories = withMatcher(
  (categoriesArray: Category[]): FetchCategoriesSuccess =>
    createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray)
);