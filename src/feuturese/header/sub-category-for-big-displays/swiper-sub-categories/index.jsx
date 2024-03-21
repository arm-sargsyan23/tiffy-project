/* swiper components */
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

/* swiper styles */
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

/* react */
import { Link } from "react-router-dom";

export default function SwiperSubCategories({ subCategoriesActive, handleSubCategoriesActive }) {
  return (
    <div className={`bg-white row-start-2 row-end-9 col-span-10 ${subCategoriesActive[0]?.categoryId === 5 && "hidden"}`}>
      <Swiper
        modules={[Navigation]}
        navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn", clickable: true }}
        slidesPerView={window.innerWidth > 1440 ? 5 : 4}
      >
        <div className="font-lora">
          {subCategoriesActive?.length > 0 &&
            subCategoriesActive.map(
              ({ subTitle, subId, categoryId }) =>
                categoryId !== 5 && (
                  <SwiperSlide key={`subCategory${subId}`}>
                    <Link
                      onClick={handleSubCategoriesActive}
                      to={"/category"}
                      className={`bg-black 2md:h-[330px] lg:h-[370px] grid place-content-center text-xs text-white`}
                    >
                      {subTitle}
                    </Link>
                  </SwiperSlide>
                )
            )}
        </div>
        <div className="w-full flex justify-end  row-start-3 row-end-4 mt-[24px] gap-[16px]">
          <button className="prev-btn w-[40px] h-[40px] border-[1px] border-primary rounded-full p-3">
            <img src="media/images/back.svg" alt="icon" />
          </button>
          <button className="next-btn w-[40px] h-[40px] rotate-180 border-[1px] border-primary rounded-full p-3">
            <img src="media/images/back.svg" alt="icon" />
          </button>
        </div>
      </Swiper>
    </div>
  );
}
