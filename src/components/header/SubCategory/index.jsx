export default function MenuForSubCategory({ menuForSubCategory, setMenuForSubCategory }) {
  return (
    <div
      className={`w-full bg-white absolute top-[129px] sm:top-[83px] py-[40px] 2md:top-[69px]lg:top-0 ${menuForSubCategory.isActive ? `xs:translate-y-0 2md:translate-y-[59px] lg:translate-y-0` : `-translate-y-full`} transition ease-in-out duration-500 overflow-hidden flex justify-center items-center text-lg 2md:z-10`}
    >
      <div
        onClick={() => {
          setMenuForSubCategory({
            isActive: false,
            name: menuForSubCategory.name
          });
        }}
        className="w-[40px] h-[40px] 2md:hidden flex justify-center items-center rounded-full text-primary border-[1px] border-primary absolute top-[12px] sm:top-[12px] text-xs left-3 p-2"
      >
        <img src="media/images/back.svg" alt="back icon" />
      </div>
      <p>{menuForSubCategory.name}</p>
    </div>
  );
}
