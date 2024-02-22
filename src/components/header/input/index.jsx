import { useState } from "react";

export default function SearchInput() {
  const [searchInputValue, setSearchInputValue] = useState("");
  return (
    <input
      className="sm:w-[200px] w-full border-[1px] block border-black rounded-full text-xs outline-none px-[16px] pr-[30px] py-[6px]"
      value={searchInputValue}
      onChange={e => {
        setSearchInputValue(e.target.value);
      }}
      type="text"
      placeholder="Поиск"
    />
  );
}
