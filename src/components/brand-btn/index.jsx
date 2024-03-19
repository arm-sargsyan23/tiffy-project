/* react */
import { Link } from "react-router-dom";

export default function BrandBtn({ handleSubCategoriesActive, goto, subTitle }) {
  return (
    <Link
      onClick={handleSubCategoriesActive}
      to={goto}
      className="min-w-max h-[30px] text-xs grid place-content-center py-1 px-[25px] border-primary border-[1px] rounded-[3px] hover:bg-black hover:text-white transition-all ease-in-out duration-300"
    >
      {subTitle}
    </Link>
  );
}
