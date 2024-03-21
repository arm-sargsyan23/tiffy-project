/* react */
import { useState } from "react";
import { Link } from "react-router-dom";

/* components */
import SwiperSubCategories from "./swiper-sub-categories/index";
import BrandsButtons from "./brands-btns";

export default function SubCategoryForSmallDisplays({
  categories,
  setMenuForSubCategory,
  handleSubCategoriesActive,
  menuForSubCategory
}) {
  const [subCategoriesActiveForPhone, setSubCategoriesActiveForPhone] = useState(null);
  return (
    <div className="w-[85%] max-2md:grid hidden bg-white">
      <div className="w-full grid content-start gap-4 font-raleway">
        {/* back icon */}
        <div
          onClick={() => {
            setMenuForSubCategory({ isActive: false, name: menuForSubCategory.name });
            setSubCategoriesActiveForPhone(null);
          }}
          className="w-[35px] h-[35px] max-2md:grid hidden border-[1px] border-primary rounded-full p-2 mt-2"
        >
          <img src="media/images/back.svg" alt="back icon" />
        </div>

        {/* content */}
        <div>
          {categories?.length > 0 &&
            categories.map(({ title, id }, i) => (
              <div
                onClick={() => {
                  setSubCategoriesActiveForPhone(prevState => (prevState === id ? null : id));
                }}
                className="grid gap-4 bg-white text-sm"
                key={`categoryForPhone${id}`}
              >
                <div className="border-b-[1px] border-primary py-5 flex justify-between items-center">
                  <span>{title}</span>
                  {subCategoriesActiveForPhone === id && (
                    <img className="rotate-[270deg] w-[15px] h-[15px]" src="media/images/back.svg" alt="active icon" />
                  )}
                </div>
                {id < categories.length ? (
                  <SwiperSubCategories
                    handleSubCategoriesActive={handleSubCategoriesActive}
                    subCategories={categories[i].subCategories}
                    isActiveSubCategoriesActiveForPhone={subCategoriesActiveForPhone === id}
                  />
                ) : (
                  <BrandsButtons
                    handleSubCategoriesActive={handleSubCategoriesActive}
                    subCategories={categories[i].subCategories}
                    isActiveSubCategoriesActiveForPhone={subCategoriesActiveForPhone === id}
                  />
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
