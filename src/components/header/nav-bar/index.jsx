import { Link } from "react-router-dom";

export default function NavBar({ cotogoriesMenu, setCotogoriesMenu }) {
  function isGendersMenuActive(compared, replaceable) {
    setCotogoriesMenu({
      isActive: cotogoriesMenu.isActive && cotogoriesMenu.name === compared ? cotogoriesMenu.isActive : !cotogoriesMenu.isActive,
      name: replaceable
    });
  }

  return (
    <>
      <Link className="hover:text-secondary transition ease-in-out duration-300">Главая</Link>
      <Link
        className="hover:text-secondary transition ease-in-out duration-300"
        onClick={() => {
          isGendersMenuActive("For Men", "For Women");
        }}
      >
        для Женщин
      </Link>
      <Link
        className="hover:text-secondary transition ease-in-out duration-300"
        onClick={() => {
          isGendersMenuActive("For Women", "For Men");
        }}
      >
        для Мужчин
      </Link>
      <Link className="hover:text-secondary transition ease-in-out duration-300">Новинки</Link>
      <Link className="hover:text-secondary transition ease-in-out duration-300">Скидки</Link>
      <Link className="hover:text-secondary transition ease-in-out duration-300">Контакты</Link>
    </>
  );
}
