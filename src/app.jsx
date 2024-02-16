import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function App() {
  const [searchInputValue, setSearchInputValue] =
    useState('');

  return (
    <div>
      {/* hover:translate-y-[100px] transition ease-linear duration-300 */}

      {/* header */}
      <div className="w-full flex justify-center bg-white border-b-[1px] border-black font-raleway font-normal">
        <div className="w-[90%] sm:w-[70%] sm:flex sm:justify-between sm:items-center grid grid-rows-2 relative">
          <div className="w-full lg:max-w-max flex ">
            <div className="min-w-max py-8">
              <img
                className="sm:w-[110px] w-[100px] h-[34px]"
                src="/media/images/logo.svg"
                alt="logo"
              />
            </div>
            <div className="w-full flex justify-end items-center lg:hidden sm:mr-[15px]">
              <div className="w-[35px] h-[35px] flex justify-center items-center p-[9px] border-primary border-[1px] rounded-full">
                <img
                  className="w-full h-full"
                  src="/media/images/burger.svg"
                  alt="burger"
                />
              </div>
            </div>
          </div>
          <div className="lg:flex hidden gap-x-16 text-xs text-primary">
            <NavLink
              activeStyle={{
                fontWeight: 'bold',
                color: 'red'
              }}>
              Главая
            </NavLink>
            <NavLink
              activeStyle={{
                fontWeight: 'bold',
                color: 'red'
              }}>
              для Женщин
            </NavLink>
            <NavLink
              activeStyle={{
                fontWeight: 'bold',
                color: 'red'
              }}>
              для Мужчин
            </NavLink>
            <NavLink
              activeStyle={{
                fontWeight: 'bold',
                color: 'red'
              }}>
              Новинки
            </NavLink>
            <NavLink
              activeStyle={{
                fontWeight: 'bold',
                color: 'red'
              }}>
              Скидки
            </NavLink>
            <NavLink
              activeStyle={{
                fontWeight: 'bold',
                color: 'red'
              }}>
              Контакты
            </NavLink>
          </div>
          <div className="flex gap-x-4">
            <div className="w-full flex items-center relative">
              <img
                className="w-[15px] absolute text-primary right-[13px] top-[35px] sm:top-[10px]"
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
    </div>
  );
}

export default App;
