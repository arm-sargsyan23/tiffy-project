import { useState } from "react";

export default function SearchInput() {
  const [searchInputValue, setSearchInputValue] = useState("");
  return (
    <>
      <img className="w-[15px] absolute text-primary right-[10px]" src="/media/images/search.svg" alt="search icon" />
      <input
        className="sm:w-[200px] w-full border-[1px] block border-black rounded-full text-xs outline-none px-[16px] pr-[30px] py-[6px]"
        value={searchInputValue}
        onChange={e => {
          setSearchInputValue(e.target.value);
        }}
        type="text"
        placeholder="Поиск"
      />
    </>
  );
}
