import { Fragment, useContext } from "react";
import { CategoryContext } from "../../context/categories.context";
import CategoryPreview from "../../components/category-preview.component.jx/category-preview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoryContext);
  return (
    <Fragment>
      {
          Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title];
            return (
              <CategoryPreview key={title} title={title} products={products} />
            )
          })
      }
    </Fragment>
  )
}

export default CategoriesPreview;