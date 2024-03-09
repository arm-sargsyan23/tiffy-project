import { Link } from "react-router-dom";

export default function BtnBrands({ handleSubCategoriesActive, subCategoriesActive }) {
  return (
    <div
      className={`bg-white h-0 row-start-2 row-end-9 col-span-10 flex font-raleway gap-2 flex-wrap font-thin ${subCategoriesActive[0]?.categoryId !== 5 && "hidden"}`}
    >
      {subCategoriesActive?.length > 0 &&
        subCategoriesActive.map(
          ({ subTitle, subId, categoryId }) =>
            categoryId === 5 && (
              <Link
                key={`subCategory${subId}`}
                onClick={handleSubCategoriesActive}
                to={"/category"}
                className={`min-w-max h-[30px] text-xs grid place-content-center py-1 px-[25px] border-primary border-[1px] rounded-[3px] hover:bg-black hover:text-white transition-all ease-in-out duration-300`}
              >
                {subTitle}
              </Link>
            )
        )}
    </div>
  );
}
