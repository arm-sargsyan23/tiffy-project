import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar({ menuForSubCategory, setMenuForSubCategory }) {
  const [navBarItems] = useState([
    {
      id: 1,
      name: "Главная"
    },
    { id: 2, name: "для Женщин", clickedItem: { gender: "For Women" } },
    { id: 3, name: "для Мужчин", clickedItem: { gender: "For Men" } },
    {
      id: 4,
      name: "Новинки"
    },
    {
      id: 5,
      name: "Скидки"
    },
    {
      id: 6,
      name: "Контакты"
    }
  ]);

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
      {navBarItems.map(({ id, name, clickedItem }) =>
        clickedItem ? (
          clickedItem.gender === "For Women" ? (
            <Link
              key={id}
              className="hover:text-secondary transition ease-in-out duration-300"
              onClick={() => {
                isGendersMenuActive("For Men", "For Women");
              }}
            >
              {name}
            </Link>
          ) : (
            <Link
              key={id}
              className="hover:text-secondary transition ease-in-out duration-300"
              onClick={() => {
                isGendersMenuActive("For Women", "For Men");
              }}
            >
              {name}
            </Link>
          )
        ) : (
          <Link key={id} className="hover:text-secondary transition ease-in-out duration-300">
            {name}
          </Link>
        )
      )}
    </>
  );
}
