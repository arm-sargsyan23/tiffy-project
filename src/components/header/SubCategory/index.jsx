/* swiper components */

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

/* swiper styles */

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
/* react */
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MenuForSubCategory({ menuForSubCategory, setMenuForSubCategory, setNavBar }) {
  const [subCategoriesActive, setSubCategoriesActive] = useState(false);

  const [brandCategory, setBrandCategory] = useState(false);

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
  const [subCategoriesActiveForPhone, setSubCategoriesActiveForPhone] = useState(false);

  function handleSubCategoriesActiveForPhone() {
    setMenuForSubCategory({ isActive: false, name: menuForSubCategory.name });
    setSubCategoriesActiveForPhone(false);
    setNavBar(false);
  }

  return (
    <div className="w-full bg-white top-[129px] sm:top-[83px] 2md:top-[138px] lg:top-[83px] z-50 absolute">
      <div
        className={`grid justify-items-center transition-all duration-300 ease-in-out overflow-hidden ${menuForSubCategory.isActive ? "grid-rows-[calc(100vh-83px)] 2md:grid-rows-[620px]" : "grid-rows-[0px]"}`}
      >
        {/* for all */}
        <div className="w-[80%] hidden 2md:grid overflow-hidden">
          <div className="w-full bg-white grid grid-rows-11 grid-cols-10 gap-6">
            <div className="h-[450px] grid grid-cols-1 content-start 2md:gap-2 lg:gap-6 row-start-2 row-end-9 col-span-3">
              {categories.length > 0
                ? categories.map(({ id, name }) =>
                    categories.length === id ? (
                      <div
                        key={id}
                        onMouseMove={() => {
                          setBrandCategory(true);
                          setSubCategoriesActive(false);
                        }}
                        className="text-sm h-[50px] grid content-center border-b-[1px] border-primary"
                      >
                        {name}
                      </div>
                    ) : (
                      <div
                        key={id}
                        onMouseMove={() => {
                          setSubCategoriesActive(true);
                          setBrandCategory(false);
                        }}
                        className="text-sm h-[50px] grid content-center border-b-[1px] border-primary"
                      >
                        {name}
                      </div>
                    )
                  )
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
                      <Link
                        onClick={handleSubCategoriesActiveForPhone}
                        to={"/category"}
                        className="bg-black 2md:h-[330px] lg:h-[400px] grid place-content-center text-xs text-white"
                      >
                        Brand 1
                      </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Link
                        onClick={handleSubCategoriesActiveForPhone}
                        to={"/category"}
                        className="bg-black 2md:h-[330px] lg:h-[400px] grid place-content-center text-xs text-white"
                      >
                        Brand 1
                      </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Link
                        onClick={handleSubCategoriesActiveForPhone}
                        to={"/category"}
                        className="bg-black 2md:h-[330px] lg:h-[400px] grid place-content-center text-xs text-white"
                      >
                        Brand 1
                      </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Link
                        onClick={handleSubCategoriesActiveForPhone}
                        to={"/category"}
                        className="bg-black 2md:h-[330px] lg:h-[400px] grid place-content-center text-xs text-white"
                      >
                        Brand 1
                      </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Link
                        onClick={handleSubCategoriesActiveForPhone}
                        to={"/category"}
                        className="bg-black 2md:h-[330px] lg:h-[400px] grid place-content-center text-xs text-white"
                      >
                        Brand 1
                      </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Link
                        onClick={handleSubCategoriesActiveForPhone}
                        to={"/category"}
                        className="bg-black 2md:h-[330px] lg:h-[400px] grid place-content-center text-xs text-white"
                      >
                        Brand 1
                      </Link>
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
            {brandCategory ? (
              <div className="bg-white h-0 row-start-2 row-end-9 col-span-7 flex font-raleway gap-2 flex-wrap font-thin">
                <Link
                  onClick={handleSubCategoriesActiveForPhone}
                  to={"/category"}
                  className="min-w-max h-[30px] text-xs grid place-content-center py-1 px-[25px] border-primary border-[1px] rounded-[3px]"
                >
                  anythingdd
                </Link>
                <Link
                  onClick={handleSubCategoriesActiveForPhone}
                  to={"/category"}
                  className="min-w-max h-[30px] text-xs grid place-content-center py-1 px-[25px] border-primary border-[1px] rounded-[3px]"
                >
                  anythingdd
                </Link>
                <Link
                  onClick={handleSubCategoriesActiveForPhone}
                  to={"/category"}
                  className="min-w-max h-[30px] text-xs grid place-content-center py-1 px-[25px] border-primary border-[1px] rounded-[3px]"
                >
                  anythingdd
                </Link>
                <Link
                  onClick={handleSubCategoriesActiveForPhone}
                  to={"/category"}
                  className="min-w-max h-[30px] text-xs grid place-content-center py-1 px-[25px] border-primary border-[1px] rounded-[3px]"
                >
                  anythingdd
                </Link>
                <Link
                  onClick={handleSubCategoriesActiveForPhone}
                  to={"/category"}
                  className="min-w-max h-[30px] text-xs grid place-content-center py-1 px-[25px] border-primary border-[1px] rounded-[3px]"
                >
                  anythingdd
                </Link>
                <Link
                  onClick={handleSubCategoriesActiveForPhone}
                  to={"/category"}
                  className="min-w-max h-[30px] text-xs grid place-content-center py-1 px-[25px] border-primary border-[1px] rounded-[3px]"
                >
                  anythingdd
                </Link>
                <Link
                  onClick={handleSubCategoriesActiveForPhone}
                  to={"/category"}
                  className="min-w-max h-[30px] text-xs grid place-content-center py-1 px-[25px] border-primary border-[1px] rounded-[3px]"
                >
                  anythingdd
                </Link>
                <Link
                  onClick={handleSubCategoriesActiveForPhone}
                  to={"/category"}
                  className="min-w-max h-[30px] text-xs grid place-content-center py-1 px-[25px] border-primary border-[1px] rounded-[3px]"
                >
                  anythingdd
                </Link>
                <Link
                  onClick={handleSubCategoriesActiveForPhone}
                  to={"/category"}
                  className="min-w-max h-[30px] text-xs grid place-content-center py-1 px-[25px] border-primary border-[1px] rounded-[3px]"
                >
                  anythingdd
                </Link>
              </div>
            ) : null}
          </div>
        </div>
        {/* for phone */}
        <div className="w-[85%] max-2md:grid hidden bg-bla">
          <div className="w-full grid content-start gap-4 font-raleway">
            {/* back icon */}
            <div
              onClick={handleSubCategoriesActiveForPhone}
              className="w-[35px] h-[35px] max-2md:grid hidden border-[1px] border-primary rounded-full p-2 mt-2"
            >
              <img src="media/images/back.svg" alt="back icon" />
            </div>
            {/* content */}
            {categories.length > 0
              ? categories.map(({ id, name }) =>
                  categories.length !== id ? (
                    <div key={id} className="w-full grid gap-4 bg-white text-sm">
                      <div
                        onClick={() => {
                          setSubCategoriesActiveForPhone(!subCategoriesActiveForPhone);
                        }}
                        className="border-b-[1px] border-primary py-4"
                      >
                        <p>{name}</p>
                      </div>
                      <Swiper
                        className={`w-full grid transition-all ease-in-out duration-500 overflow-hidden text-xs ${subCategoriesActiveForPhone ? "grid-rows-[240px]" : "grid-rows-[0px]"}`}
                      >
                        <SwiperSlide>
                          <Link
                            onClick={handleSubCategoriesActiveForPhone}
                            to={"/category"}
                            className="bg-black h-[240px] min-w-[160px] grid place-content-center text-white"
                          >
                            Brand 1
                          </Link>
                          <Link
                            onClick={handleSubCategoriesActiveForPhone}
                            to={"/category"}
                            className="bg-black h-[240px] min-w-[160px] grid place-content-center text-white"
                          >
                            Brand 1
                          </Link>
                          <Link
                            onClick={handleSubCategoriesActiveForPhone}
                            to={"/category"}
                            className="bg-black h-[240px] min-w-[160px] grid place-content-center text-white"
                          >
                            Brand 1
                          </Link>
                          <Link
                            onClick={handleSubCategoriesActiveForPhone}
                            to={"/category"}
                            className="bg-black h-[240px] min-w-[160px] grid place-content-center text-white"
                          >
                            Brand 1
                          </Link>
                          <Link
                            onClick={handleSubCategoriesActiveForPhone}
                            to={"/category"}
                            className="bg-black h-[240px] min-w-[160px] grid place-content-center text-white"
                          >
                            Brand 1
                          </Link>
                          <Link
                            onClick={handleSubCategoriesActiveForPhone}
                            to={"/category"}
                            className="bg-black h-[240px] min-w-[160px] grid place-content-center text-white"
                          >
                            Brand 1
                          </Link>
                          <Link
                            onClick={handleSubCategoriesActiveForPhone}
                            to={"/category"}
                            className="bg-black h-[240px] min-w-[160px] grid place-content-center text-white"
                          >
                            Brand 1
                          </Link>
                          <Link
                            onClick={handleSubCategoriesActiveForPhone}
                            to={"/category"}
                            className="bg-black h-[240px] min-w-[160px] grid place-content-center text-white"
                          >
                            Brand 1
                          </Link>
                          <Link
                            onClick={handleSubCategoriesActiveForPhone}
                            to={"/category"}
                            className="bg-black h-[240px] min-w-[160px] grid place-content-center text-white"
                          >
                            Brand 1
                          </Link>
                          <Link
                            onClick={handleSubCategoriesActiveForPhone}
                            to={"/category"}
                            className="bg-black h-[240px] min-w-[160px] grid place-content-center text-white"
                          >
                            Brand 1
                          </Link>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  ) : (
                    <div key={id} className="w-full grid gap-4 bg-white text-sm">
                      <div
                        onClick={() => {
                          setBrandCategory(!brandCategory);
                        }}
                        className="border-b-[1px] border-primary py-4"
                      >
                        <p>{name}</p>
                      </div>
                      <div
                        className={`w-full bg-white grid transition-all ease-in-out duration-500 overflow-hidden text-xs ${brandCategory ? "md:grid-rows-[280px] grid-rows-[500px]" : "grid-rows-[0px]"}`}
                      >
                        <div className="h-0 flex font-raleway gap-2 flex-wrap font-thin">
                          <Link
                            onClick={handleSubCategoriesActiveForPhone}
                            to={"/category"}
                            className="min-w-max h-[30px] text-xs grid place-content-center py-1 px-[25px] border-primary border-[1px] rounded-[3px]"
                          >
                            anythingdd
                          </Link>
                          <Link
                            onClick={handleSubCategoriesActiveForPhone}
                            to={"/category"}
                            className="min-w-max h-[30px] text-xs grid place-content-center py-1 px-[25px] border-primary border-[1px] rounded-[3px]"
                          >
                            anythingdd
                          </Link>
                          <Link
                            onClick={handleSubCategoriesActiveForPhone}
                            to={"/category"}
                            className="min-w-max h-[30px] text-xs grid place-content-center py-1 px-[25px] border-primary border-[1px] rounded-[3px]"
                          >
                            anythingdd
                          </Link>
                          <Link
                            onClick={handleSubCategoriesActiveForPhone}
                            to={"/category"}
                            className="min-w-max h-[30px] text-xs grid place-content-center py-1 px-[25px] border-primary border-[1px] rounded-[3px]"
                          >
                            anythingdd
                          </Link>
                          <Link
                            onClick={handleSubCategoriesActiveForPhone}
                            to={"/category"}
                            className="min-w-max h-[30px] text-xs grid place-content-center py-1 px-[25px] border-primary border-[1px] rounded-[3px]"
                          >
                            anythingdd
                          </Link>
                          <Link
                            onClick={handleSubCategoriesActiveForPhone}
                            to={"/category"}
                            className="min-w-max h-[30px] text-xs grid place-content-center py-1 px-[25px] border-primary border-[1px] rounded-[3px]"
                          >
                            anythingdd
                          </Link>
                          <Link
                            onClick={handleSubCategoriesActiveForPhone}
                            to={"/category"}
                            className="min-w-max h-[30px] text-xs grid place-content-center py-1 px-[25px] border-primary border-[1px] rounded-[3px]"
                          >
                            anythingdd
                          </Link>
                          <Link
                            onClick={handleSubCategoriesActiveForPhone}
                            to={"/category"}
                            className="min-w-max h-[30px] text-xs grid place-content-center py-1 px-[25px] border-primary border-[1px] rounded-[3px]"
                          >
                            anythingdd
                          </Link>
                          <Link
                            onClick={handleSubCategoriesActiveForPhone}
                            to={"/category"}
                            className="min-w-max h-[30px] text-xs grid place-content-center py-1 px-[25px] border-primary border-[1px] rounded-[3px]"
                          >
                            anythingdd
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                )
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}
