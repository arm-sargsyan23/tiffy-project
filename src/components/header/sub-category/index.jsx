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
  const [subCategoriesActive, setSubCategoriesActive] = useState([]);
  const [subCategoriesActiveForPhone, setSubCategoriesActiveForPhone] = useState([]);

  const [brandCategory, setBrandCategory] = useState(false);

  const categories = [
    {
      id: 1,
      title: "Одежда",
      subCategories: [
        { subTitle: "Electronics", subId: 1, categoryId: 1 },
        { subTitle: "Technology", subId: 2, categoryId: 1 },
        { subTitle: "Software", subId: 3, categoryId: 1 },
        { subTitle: "Software", subId: 4, categoryId: 1 },
        { subTitle: "Software", subId: 5, categoryId: 1 },
        { subTitle: "Software", subId: 6, categoryId: 1 },
        { subTitle: "Software", subId: 7, categoryId: 1 },
        { subTitle: "Software", subId: 8, categoryId: 1 },
        { subTitle: "Software", subId: 9, categoryId: 1 },
        { subTitle: "Software", subId: 10, categoryId: 1 }
      ]
    },
    {
      id: 2,
      title: "Обувь",
      subCategories: [
        { subTitle: "Apparel", subId: 11, categoryId: 2 },
        { subTitle: "Footwear", subId: 12, categoryId: 2 },
        { subTitle: "Sports Equipment", subId: 13, categoryId: 2 },
        { subTitle: "Sports Equipment", subId: 14, categoryId: 2 },
        { subTitle: "Sports Equipment", subId: 15, categoryId: 2 },
        { subTitle: "Sports Equipment", subId: 16, categoryId: 2 },
        { subTitle: "Sports Equipment", subId: 17, categoryId: 2 },
        { subTitle: "Sports Equipment", subId: 18, categoryId: 2 },
        { subTitle: "Sports Equipment", subId: 19, categoryId: 2 }
      ]
    },
    {
      id: 3,
      title: "Сумки",
      subCategories: [
        { subTitle: "Soft Drinks", subId: 20, categoryId: 3 },
        { subTitle: "Beverages", subId: 21, categoryId: 3 },
        { subTitle: "Soft Drinks", subId: 22, categoryId: 3 },
        { subTitle: "Soft Drinks", subId: 23, categoryId: 3 },
        { subTitle: "Soft Drinks", subId: 24, categoryId: 3 },
        { subTitle: "Soft Drinks", subId: 25, categoryId: 3 },
        { subTitle: "Soft Drinks", subId: 26, categoryId: 3 }
      ]
    },
    {
      id: 4,
      title: "Аксессуары",
      subCategories: [
        { subTitle: "Software", subId: 27, categoryId: 4 },
        { subTitle: "Internet Services", subId: 28, categoryId: 4 },
        { subTitle: "Technology", subId: 29, categoryId: 4 },
        { subTitle: "Technology", subId: 30, categoryId: 4 },
        { subTitle: "Technology", subId: 31, categoryId: 4 },
        { subTitle: "Technology", subId: 32, categoryId: 4 }
      ]
    },
    {
      id: 5,
      title: "Бренды",
      subCategories: [
        { subTitle: "Walmart", subId: 33, categoryId: 5 },
        { subTitle: "Target", subId: 34, categoryId: 5 },
        { subTitle: "Zara", subId: 35, categoryId: 5 },
        { subTitle: "H&M", subId: 36, categoryId: 5 },
        { subTitle: "McDonald's", subId: 37, categoryId: 5 },
        { subTitle: "IKEA", subId: 38, categoryId: 5 },
        { subTitle: "Subway", subId: 39, categoryId: 5 },
        { subTitle: "KFC", subId: 40, categoryId: 5 },
        { subTitle: "Taco Bell", subId: 41, categoryId: 5 },
        { subTitle: "Pizza Hut", subId: 42, categoryId: 5 },
        { subTitle: "CVS", subId: 43, categoryId: 5 },
        { subTitle: "Domino's", subId: 44, categoryId: 5 },
        { subTitle: "Walgreens", subId: 45, categoryId: 5 },
        { subTitle: "Dollar General", subId: 46, categoryId: 5 },
        { subTitle: "Dollar Tree", subId: 47, categoryId: 5 },
        { subTitle: "Costco", subId: 48, categoryId: 5 },
        { subTitle: "Lowe's", subId: 49, categoryId: 5 },
        { subTitle: "7-Eleven", subId: 50, categoryId: 5 },
        { subTitle: "Dunkin'", subId: 51, categoryId: 5 },
        { subTitle: "Burger King", subId: 52, categoryId: 5 },
        { subTitle: "Wendy's", subId: 53, categoryId: 5 },
        { subTitle: "Chipotle", subId: 54, categoryId: 5 },
        { subTitle: "Forever 21", subId: 55, categoryId: 5 },
        { subTitle: "Old Navy", subId: 56, categoryId: 5 },
        { subTitle: "Gap", subId: 57, categoryId: 5 },
        { subTitle: "Sears", subId: 58, categoryId: 5 },
        { subTitle: "JCPenney", subId: 59, categoryId: 5 },
        { subTitle: "Dollar Tree", subId: 60, categoryId: 5 }
      ]
    }
  ];

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
          <div className="w-full grid grid-rows-11 grid-cols-11 gap-6 bg-secondary">
            <div className="h-[440px] grid grid-cols-1 content-start 2md:gap-2 lg:gap-6 row-start-2 row-end-9 col-span-3">
              {categories?.length > 0 &&
                categories.map(({ id, subCategories, title }) => (
                  <div
                    key={`category${id}`}
                    onMouseMove={() => {
                      setSubCategoriesActive(subCategories);
                    }}
                    className="text-sm h-[50px] grid content-center border-b-[1px] border-primary cursor-pointer"
                  >
                    {title}
                  </div>
                ))}
            </div>

            <div
              className={`bg-red-500 row-start-2 row-end-9 col-span-10 ${subCategoriesActive[0]?.categoryId === 5 && "hidden"}`}
            >
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
                              onClick={handleSubCategoriesActiveForPhone}
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

            <div
              className={`bg-white h-0 row-start-2 row-end-9 col-span-10 flex font-raleway gap-2 flex-wrap font-thin ${subCategoriesActive[0]?.categoryId !== 5 && "hidden"}`}
            >
              {subCategoriesActive?.length > 0 &&
                subCategoriesActive.map(
                  ({ subTitle, subId, categoryId }) =>
                    categoryId === 5 && (
                      <Link
                        key={`subCategory${subId}`}
                        onClick={handleSubCategoriesActiveForPhone}
                        to={"/category"}
                        className={`min-w-max h-[30px] text-xs grid place-content-center py-1 px-[25px] border-primary border-[1px] rounded-[3px] hover:bg-black hover:text-white transition-all ease-in-out duration-300`}
                      >
                        {subTitle}
                      </Link>
                    )
                )}
            </div>
          </div>
        </div>

        {/* for phone */}
        <div className="w-[85%] max-2md:grid hidden bg-bla">
          <div className="w-full grid content-start gap-4 font-raleway">
            {/* back icon */}
            <div
              onClick={() => {
                setMenuForSubCategory({ isActive: false, name: menuForSubCategory.name });
                setSubCategoriesActiveForPhone([]);
              }}
              className="w-[35px] h-[35px] max-2md:grid hidden border-[1px] border-primary rounded-full p-2 mt-2"
            >
              <img src="media/images/back.svg" alt="back icon" />
            </div>
            {/* content */}
            {categories?.length > 0 &&
              categories.map(({ id, title }) =>
                categories.length !== id ? (
                  <div key={id} className="w-full grid gap-4 bg-white text-sm">
                    <div
                      onClick={() => {
                        setSubCategoriesActiveForPhone(!subCategoriesActiveForPhone);
                      }}
                      className="border-b-[1px] border-primary py-4"
                    >
                      <p>{title}</p>
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
                      <p>{title}</p>
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
                          anything
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
