export default function NavigateButton({ name }) {
  return (
    <button className="flex items-center gap-x-[10px]">
      <p className="text-sm">{name}</p>
      <div className="border-secondary border-[1px] rounded-full w-[40px] h-[40px] p-4">
        <img className="rotate-[180deg]" src="/media/images/back.svg" alt="navigate button" />
      </div>
    </button>
  );
}
