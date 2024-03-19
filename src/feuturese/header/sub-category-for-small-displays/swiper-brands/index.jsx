/* components */
import SwiperBrand from "./swiper-brand";

/* swiper components */
import { Swiper, SwiperSlide } from "swiper/react";

/* swiper styles */
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function SwiperBrands({ i, id, subCategoriesActiveForPhone, categories, handleSubCategoriesActive }) {
  return (
    <Swiper
      className={`w-full bg-white grid transition-all ease-in-out duration-300 overflow-hidden text-xs ${subCategoriesActiveForPhone === id ? "grid-rows-[240px]" : "grid-rows-[0px]"}`}
    >
      {categories[i]?.subCategories?.map(({ subId, subTitle }) => (
        <SwiperSlide key={`subCategoryForPhone${subId}`}>
          <SwiperBrand handleSubCategoriesActive={handleSubCategoriesActive} subTitle={subTitle} goTo={`/category`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
