/* react */
import { useState } from "react";

/* components */
import Categories from "./categories";
import SwiperBrands from "./swiper-brands";
import BtnBrands from "./btn-brands";

export default function SubCategoryForBigDisplays({ categories, handleSubCategoriesActive }) {
  const [subCategoriesActive, setSubCategoriesActive] = useState([]);
  return (
    <div className="w-[80%] hidden 2md:grid overflow-hidden">
      <div className="w-full grid grid-rows-11 grid-cols-11 gap-6 bg-white">
        <Categories
          categories={categories}
          subCategoriesActive={subCategoriesActive}
          setSubCategoriesActive={setSubCategoriesActive}
          handleSubCategoriesActive={handleSubCategoriesActive}
        />
        <SwiperBrands subCategoriesActive={subCategoriesActive} setSubCategoriesActive={setSubCategoriesActive} />

        <BtnBrands subCategoriesActive={subCategoriesActive} />
      </div>
    </div>
  );
}
