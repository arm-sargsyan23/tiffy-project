export default function MenuForSubCategory({ name, isActive, setMenuForSubCategory }) {
  return (
    <div
      className={`w-full h-[700px] bg-primary absolute top-[129px] sm:top-[83px] 2md:top-[69px ]lg:top-0 ${isActive ? `xs:translate-y-0 2md:translate-y-[69px] lg:translate-y-0` : `-translate-y-full`} bg-white transition ease-in-out duration-500 overflow-hidden flex justify-center items-center text-lg 2md:z-10`}
    >
      <div
        onClick={() => {
          setMenuForSubCategory({
            isActive: false,
            name: name
          });
        }}
        className="w-[50px] h-[40px] 2md:hidden flex justify-center items-center rounded-full text-primary bg-zinc-400 absolute top-[12px] sm:top-[12px] text-xs left-3 p-4"
      >
        <img src="media/images/back.svg" alt="back icon" />
      </div>
      <p>{name}</p>
    </div>
  );
}
