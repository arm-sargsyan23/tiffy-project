/* swiper components */

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

/* swiper styles */

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";

export default function MenuForSubCategory({ menuForSubCategory, setMenuForSubCategory }) {
  const [subCategoriesActive, setSubCategoriesActive] = useState(false);
  const [categories] = useState([
    {
      id: 1,
      name: "Одежда"
    },
    {
      id: 2,
      name: "Обувь"
    },
    {
      id: 3,
      name: "Сумки"
    },
    {
      id: 4,
      name: "Аксессуары"
    },
    {
      id: 5,
      name: "Бренды"
    }
  ]);

  return (
    <div className="w-full bg-white top-[129px] sm:top-[83px] 2md:top-[138px] lg:top-[83px] z-50 absolute">
      <div
        className={`grid justify-items-center transition-all duration-300 ease-in-out overflow-hidden ${menuForSubCategory.isActive ? "grid-rows-[620px]" : "grid-rows-[0px]"}`}
      >
        <div className="w-[80%] grid overflow-hidden bg-white">
          <div
            onClick={() => {
              setMenuForSubCategory({ isActive: false, name: menuForSubCategory.name });
            }}
            className="w-[35px] h-[35px] max-2md:grid hidden border-[1px] border-primary rounded-full p-2"
          >
            <img src="media/images/back.svg" alt="back icon" />
          </div>
          <div className="w-full bg-white grid grid-rows-11 grid-cols-10 gap-6">
            <div className="h-[450px] grid grid-cols-1 content-start 2md:gap-2 lg:gap-6 row-start-2 row-end-9       col-span-3">
              {categories.length > 0
                ? categories.map(({ id, name }) => (
                    <div
                      key={id}
                      onMouseMove={() => {
                        setSubCategoriesActive(true);
                      }}
                      className="text-sm h-[50px] grid content-center border-b-[1px] border-primary"
                    >
                      {name}
                    </div>
                  ))
                : null}
            </div>
            {subCategoriesActive ? (
              <div className="bg-white h-[450px] row-start-2 row-end-9         col-span-7">
                <Swiper
                  modules={[Navigation]}
                  navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn", clickable: true }}
                  slidesPerView={window.innerWidth > 1440 ? 5 : 4}
                >
                  <div className="font-lora">
                    <SwiperSlide>
                      <div className="bg-black 2md:h-[330px] lg:h-[400px] grid place-content-center text-xs text-white">
                        Brand 1
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="bg-black 2md:h-[330px] lg:h-[400px] grid place-content-center text-xs text-white">
                        Brand 2
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="bg-black 2md:h-[330px] lg:h-[400px] grid place-content-center text-xs text-white">
                        Brand 3
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="bg-black 2md:h-[330px] lg:h-[400px] grid place-content-center text-xs text-white">
                        Brand 4
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="bg-black 2md:h-[330px] lg:h-[400px] grid place-content-center text-xs text-white">
                        Brand 5
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="bg-black 2md:h-[330px] lg:h-[400px] grid place-content-center text-xs text-white">
                        Brand 6
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="bg-black 2md:h-[330px] lg:h-[400px] grid place-content-center text-xs text-white">
                        Brand 7
                      </div>
                    </SwiperSlide>
                  </div>
                  <div className="w-full flex justify-end  row-start-3 row-end-4 mt-[5px] gap-2 px-3">
                    <button className="prev-btn w-[40px] h-[40px] border-[1px] border-primary rounded-full p-3">
                      <img src="media/images/back.svg" alt="icon" />
                    </button>
                    <button className="next-btn w-[40px] h-[40px] rotate-180 border-[1px] border-primary rounded-full p-3">
                      <img src="media/images/back.svg" alt="icon" />
                    </button>
                  </div>
                </Swiper>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
