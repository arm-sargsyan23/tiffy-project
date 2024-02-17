import React from 'react';

function CotologMenu({ name, isActive }) {
  return (
    <div
      className={`bg-white w-full h-[600px] absolute ${isActive ? 'translate-y-[84px]' : '-translate-y-[600px]'} top-0 transition ease-in-out duration-500 overflow-hidden flex justify-center items-center text-lg z-2`}>
      <p>{name}</p>
    </div>
  );
}

export default CotologMenu;
