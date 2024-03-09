/* react */
import { useState } from "react";
/* header components */
import NavBar from "./nav-bar";
import SearchInput from "./input";
import MenuForSubCategory from "./sub-category";
/* hooks */
import useHandleClientWidth from "./hooks/useHandleClientWidth/index";

export default function Header() {
  const [menuForSubCategory, setMenuForSubCategory] = useState({
    isActive: false,
    name: ""
  });

  const [navBar, setNavBar] = useState(false);

  const HandleResize = useHandleClientWidth({ setNavBar, setMenuForSubCategory });

  function handleMenuForSubCategory() {
    setNavBar(!navBar);
    navBar
      ? setMenuForSubCategory({
          isActive: false,
          name: menuForSubCategory.name
        })
      : null;
  }

  HandleResize();

  return (
    <header className={`flex justify-center`}>
      {/* header */}
      <div className="w-full min-h-max sm:pb-0 pb-4 flex justify-center flex-wrap bg-white border-b-[1px] border-primary font-raleway fixed z-[9999]">
        <div className="w-[90%] sm:w-[85%] 2md:w-[80%] sm:flex grid sm:justify-between sm:items-center relative">
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
          <div className="hidden w-full transition ease-in-out duration-400 items-center justify-center lg:translate-y-0 lg:static lg:flex gap-x-16 text-xs text-primary">
            <NavBar menuForSubCategory={menuForSubCategory} setMenuForSubCategory={setMenuForSubCategory} />
          </div>

          <div className="flex gap-x-4">
            <div className="w-full flex items-center relative">
              <SearchInput />
            </div>
          </div>
        </div>
      </div>
      <div className={`w-full bg-white fixed lg:hidden grid justify-items-center z-10 top-[129px] sm:top-[83px]`}>
        <div
          className={`bg-white w-[60%] grid text-xs transition-all ease-in-out duration-500 ${navBar ? "grid-rows-[calc(100vh-129px)] sm:grid-rows-[calc(100vh-83px)] 2md:grid-rows-[55px]" : "grid-rows-[0px]"}`}
        >
          <div className="bg-white overflow-hidden content-start gap-y-6 max-2md:mt-[40px] w-full grid justify-items-center 2md:grid-cols-6">
            <NavBar menuForSubCategory={menuForSubCategory} setMenuForSubCategory={setMenuForSubCategory} />
          </div>
        </div>
      </div>
      <MenuForSubCategory
        menuForSubCategory={menuForSubCategory}
        setMenuForSubCategory={setMenuForSubCategory}
        setNavBar={setNavBar}
      />
    </header>
  );
}
