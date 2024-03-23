/* components */
import SwiperSubCategory from "./swiper-sub-category/index";

/* swiper components */
import { Swiper, SwiperSlide } from "swiper/react";

/* swiper styles */
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function SwiperSubCategories({ subCategories, isActiveSubCategoriesActiveForPhone, handleSubCategoriesActive }) {
  return (
    <Swiper
      className={`w-full bg-white grid transition-all ease-in-out duration-300 overflow-hidden text-xs ${isActiveSubCategoriesActiveForPhone ? "grid-rows-[240px]" : "grid-rows-[0px]"}`}
    >
      {subCategories?.map(({ subId, subTitle }) => (
        <SwiperSlide key={`subCategoryForPhone${subId}`}>
          <SwiperSubCategory handleSubCategoriesActive={handleSubCategoriesActive} subTitle={subTitle} goTo={`/category`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
