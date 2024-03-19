/* react */
import { Link } from "react-router-dom";

/* components */
import { BrandBtn } from "../../../../components/index";

export default function BrandsButtons({ handleSubCategoriesActive, subCategoriesActiveForPhone, id, categories, i }) {
  return (
    <div
      className={`grid overflow-hidden transition-all ease-in-out duration-300 ${subCategoriesActiveForPhone === id ? "grid-rows-[500px] sm:grid-rows-[280px] md:grid-rows-[200px]" : "grid-rows-[0px]"}`}
    >
      <div className={`h-0 flex font-raleway gap-2 flex-wrap font-thin`}>
        {categories[i]?.subCategories?.map(({ subId, subTitle }) => (
          <BrandBtn
            key={`subCategoryForPhone${subId}`}
            handleSubCategoriesActive={handleSubCategoriesActive}
            goto={"/category"}
            subTitle={subTitle}
          />
        ))}
      </div>
    </div>
  );
}
