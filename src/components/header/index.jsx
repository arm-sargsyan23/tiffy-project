import MenuForSubCategory from "./SubCategory";
import { useState, useEffect } from "react";
import NavBar from "./nav-bar";
import SearchInput from "./input";

export default function Header() {
  const [menuForSubCategory, setMenuForSubCategory] = useState({
    isActive: false,
    name: ""
  });

  const [navBar, setNavBar] = useState(false);

  function handleMenuForSubCategory() {
    setNavBar(!navBar);
    navBar
      ? setMenuForSubCategory({
          isActive: false,
          name: menuForSubCategory.name
        })
      : null;
  }

  function handleClientWidth() {
    setNavBar(false);
    setMenuForSubCategory({
      isActive: false,
      name: ""
    });
  }

  useEffect(() => {
    window.addEventListener("resize", handleClientWidth);

    return () => {
      window.removeEventListener("resize", handleClientWidth);
    };
  }, []);

  return (
    <header className={`flex justify-center`}>
      {/* header */}
      <div className="w-full min-h-max sm:pb-0 pb-4 flex justify-center flex-wrap bg-white border-b-[1px] border-primary font-raleway fixed z-50">
        <div className="w-[90%] sm:w-[75%] sm:flex grid sm:justify-between sm:items-center relative z-20">
          <div className="w-full lg:max-w-max flex">
            <div className="min-w-max py-8 z-10">
              <img className="sm:w-[110px] w-[100px] h-[34px]" src="/media/images/logo.svg" alt="logo" />
            </div>
            <div className="w-full flex justify-end items-center lg:hidden z-10">
              <div
                onClick={handleMenuForSubCategory}
                className="w-[35px] h-[35px] flex justify-center items-center p-[9px] border-primary border-[1px] rounded-full sm:mr-[15px]"
              >
                <img
                  className="w-full h-full"
                  src={`${navBar ? "/media/images/burger-cancel.svg" : "media/images/burger.svg"}`}
                  alt="burger"
                />
              </div>
            </div>
          </div>
          <div className="hidden w-full h-full transition ease-in-out duration-400 items-center justify-center lg:translate-y-0 lg:static lg:flex gap-x-16 text-xs text-primary">
            <NavBar menuForSubCategory={menuForSubCategory} setMenuForSubCategory={setMenuForSubCategory} />
          </div>

          <div className="flex gap-x-4">
            <div className="w-full flex items-center relative">
              <SearchInput />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`w-full bg-white fixed lg:hidden grid justify-items-center transition-all ease-in-out duration-300 z-50 top-[129px] sm:top-[83px] ${navBar ? "xs:grid-rows-[700px] 2md:grid-rows-[55px]" : "grid-rows-[0px]"}`}
      >
        <div className="2md:flex bg-white grid place-content-evenly justify-items-center w-[50%] max-2md:h-[60%] 2md:justify-between 2md:items-center text-xs overflow-hidden">
          <NavBar menuForSubCategory={menuForSubCategory} setMenuForSubCategory={setMenuForSubCategory} />
        </div>
      </div>
      <MenuForSubCategory menuForSubCategory={menuForSubCategory} setMenuForSubCategory={setMenuForSubCategory} />
    </header>
  );
}
