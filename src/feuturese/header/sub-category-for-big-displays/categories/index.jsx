export default function Categories({ categories, subCategoriesActive, setSubCategoriesActive }) {
  return (
    <div className="h-[440px] grid grid-cols-1 content-start 2md:gap-6 lg:gap-10 row-start-2 row-end-9 col-span-3">
      {categories?.length > 0 &&
        categories.map(({ id, subCategories, title }, i) => (
          <div
            key={`category${id}`}
            onMouseMove={() => {
              setSubCategoriesActive(subCategories);
            }}
            className="text-sm h-[50px] flex justify-between items-center border-b-[1px] border-primary cursor-pointer"
          >
            <span>{title}</span>
            {subCategoriesActive[i]?.categoryId === id && (
              <img className="rotate-180 w-[15px] h-[15px]" src="media/images/back.svg" alt="active icon" />
            )}
          </div>
        ))}
    </div>
  );
}
