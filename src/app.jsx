import { useState } from 'react';
import {
  Link,
  unstable_useViewTransitionState
} from 'react-router-dom';
import CotologMenu from './components/cotolog';

function App() {
  const [searchInputValue, setSearchInputValue] =
    useState('');
  const [cotogoriesMenu, setCotogoriesMenu] =
    useState({ isActive: false, name: '' });
  const [mediaMenu, setMediaMenu] =
    useState(false);

  return (
    <header>
      {/* header */}
      <div className="w-full min-h-max flex justify-center bg-white border-b-[1px] border-black font-raleway font-normal fixed z-50">
        <div className="w-[90%] sm:w-[75%] sm:flex sm:justify-between sm:items-center grid grid-rows-2 relative">
          <div className="w-full lg:max-w-max flex ">
            <div className="min-w-max py-8 z-10">
              <img
                className="sm:w-[110px] w-[100px] h-[34px]"
                src="/media/images/logo.svg"
                alt="logo"
              />
            </div>
            <div className="w-full flex justify-end items-center lg:hidden bg-white z-10">
              <div
                onClick={() => {
                  setMediaMenu(!mediaMenu);
                  cotogoriesMenu
                    ? setCotogoriesMenu(false)
                    : null;
                }}
                className="w-[35px] h-[35px] flex justify-center items-center p-[9px] border-primary border-[1px] rounded-full sm:mr-[15px]">
                {mediaMenu ? (
                  <p className="text-md flex justify-center items-center">
                    -
                  </p>
                ) : (
                  <img
                    className="w-full h-full"
                    src="/media/images/burger.svg"
                    alt="burger"
                  />
                )}
              </div>
            </div>
          </div>
          <div
            className={` hidden w-full h-full ${mediaMenu ? '2md:translate-y-[83px]' : '2md:translate-y-[0]'} transition ease-in-out duration-500 2md:absolute 2md:flex items-center justify-center bg-white -z-30             lg:translate-y-0 lg:static lg:flex gap-x-16 text-xs text-primary`}>
            <Link>Главая</Link>
            <Link
              onClick={() => {
                setCotogoriesMenu({
                  isActive:
                    cotogoriesMenu.isActive &&
                    cotogoriesMenu.name ===
                      'For Men'
                      ? (cotogoriesMenu.name =
                          'For Women')
                      : !cotogoriesMenu.isActive,
                  name: 'For Women'
                });
              }}>
              для Женщин
            </Link>
            <Link
              onClick={() => {
                setCotogoriesMenu({
                  isActive:
                    cotogoriesMenu.isActive &&
                    cotogoriesMenu.name ===
                      'For Women'
                      ? (cotogoriesMenu.name =
                          'For Women')
                      : !cotogoriesMenu.isActive,
                  name: 'For Men'
                });
              }}>
              для Мужчин
            </Link>
            <Link>Новинки</Link>
            <Link>Скидки</Link>
            <Link>Контакты</Link>
          </div>

          <div className="flex h-full gap-x-4">
            <div className="w-full h-full bg-white border-[3px] border-white flex items-center relative">
              <img
                className="w-[15px] absolute text-primary right-[13px] top-[30px] sm:top-[30px]"
                src="/media/images/search.svg"
                alt="search icon"
              />
              <input
                className="sm:w-[200px] w-full border-[1px] block border-black rounded-full text-xs outline-none px-[16px] pr-[30px] py-[6px]"
                value={searchInputValue}
                onChange={(e) => {
                  setSearchInputValue(
                    e.target.value
                  );
                }}
                type="text"
                placeholder="Поиск"
              />
            </div>
          </div>
        </div>
      </div>
      <CotologMenu
        name={cotogoriesMenu.name}
        isActive={cotogoriesMenu.isActive}
      />
    </header>
  );
}

export default App;
