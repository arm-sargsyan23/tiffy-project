import { Link } from "react-router-dom";

export default function NavBar({ menuForSubCategory, setMenuForSubCategory }) {
  const navBarItems = [
    {
      id: 1,
      name: "Главная",
      path: "/"
    },
    { id: 2, name: "для Женщин", clickedItem: { gender: "For Women" } },
    { id: 3, name: "для Мужчин", clickedItem: { gender: "For Men" } },
    {
      id: 4,
      name: "Новинки",
      path: "/new_products"
    },
    {
      id: 5,
      name: "Скидки",
      path: "/discount"
    },
    {
      id: 6,
      name: "Контакты",
      path: "/contacts"
    }
  ];

  function isGendersMenuActive(compared, replaceable) {
    setMenuForSubCategory({
      isActive:
        menuForSubCategory.isActive && menuForSubCategory.name === compared
          ? menuForSubCategory.isActive
          : !menuForSubCategory.isActive,
      name: replaceable
    });
  }

  return (
    <>
      {navBarItems.map(({ id, name, clickedItem, path }) =>
        clickedItem ? (
          clickedItem.gender === "For Women" ? (
            <Link
              to={path && path}
              key={id}
              className="hover:text-secondary transition ease-in-out duration-300 2md:relative 2md:top-[18px] lg:top-0 overflow-hidden max-2md:h-[40px]"
              onClick={() => {
                isGendersMenuActive("For Men", "For Women");
              }}
            >
              {name}
            </Link>
          ) : (
            <Link
              to={path && path}
              key={id}
              className="hover:text-secondary transition ease-in-out duration-300 2md:relative 2md:top-[18px] lg:top-0 overflow-hidden max-2md:h-[40px]"
              onClick={() => {
                isGendersMenuActive("For Women", "For Men");
              }}
            >
              {name}
            </Link>
          )
        ) : (
          <Link
            to={path && path}
            key={id}
            className="hover:text-secondary transition ease-in-out duration-300 2md:relative 2md:top-[18px] lg:top-0 overflow-hidden max-2md:h-[40px]"
          >
            {name}
          </Link>
        )
      )}
    </>
  );
}
