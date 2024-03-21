/* react */
import { Link } from "react-router-dom";

export default function SwiperSubCategory({ subTitle, goTo, handleSubCategoriesActive }) {
  return (
    <Link onClick={handleSubCategoriesActive} to={goTo} className="bg-black h-[240px] grid place-content-center text-white">
      {subTitle}
    </Link>
  );
}
