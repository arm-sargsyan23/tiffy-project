function CotologMenu({
  name,
  isActive,
  displayWidth,
  setCotogoriesMenu,
  mediaMenu
}) {
  return (
    <div
      className={`w-full h-[700px] absolute top-[129px] sm:top-[83px] 2md:top-[69px] lg:top-0 ${mediaMenu ? 'top-[69px]' : null} ${isActive ? `${displayWidth + 16 < 1200 ? 'translate-x-0' : 'translate-y-[83px]'}` : `${displayWidth + 16 < 1200 ? '-translate-x-full' : '-translate-y-full'}`} bg-white transition ease-in-out duration-500 overflow-hidden flex justify-center items-center text-lg 2md:z-10`}>
      <div
        onClick={() => {
          setCotogoriesMenu({
            isActive: false,
            name: name
          });
        }}
        className="w-[50px] h-[40px] 2md:hidden flex justify-center items-center rounded-full text-primary bg-zinc-400 absolute top-[12px] sm:top-[12px] text-xs left-3">
        Back
      </div>
      <p>{name}</p>
    </div>
  );
}

export default CotologMenu;
