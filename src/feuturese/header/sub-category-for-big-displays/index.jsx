/* react */
import { useState } from "react";

/* components */
import Categories from "./categories";
import SwiperSubCategories from "./swiper-sub-categories";
import BtnBrands from "./brands-btns";

export default function SubCategoryForBigDisplays({ categories }) {
  const [subCategoriesActive, setSubCategoriesActive] = useState([]);
  return (
    <div className="w-[80%] hidden 2md:grid overflow-hidden">
      <div className="w-full grid grid-rows-11 grid-cols-11 gap-6 bg-white">
        <Categories
          categories={categories}
          subCategoriesActive={subCategoriesActive}
          setSubCategoriesActive={setSubCategoriesActive}
        />
        <SwiperSubCategories subCategoriesActive={subCategoriesActive} setSubCategoriesActive={setSubCategoriesActive} />

        <BtnBrands subCategoriesActive={subCategoriesActive} />
      </div>
    </div>
  );
}
