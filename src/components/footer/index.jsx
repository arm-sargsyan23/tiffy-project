import { Link } from "react-router-dom";

export default function Footer() {
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

  return (
    <div className="w-full bg-primary grid justify-items-center grid-row-2 font-raleway py-10 gap-10">
      <div className="w-[80%] min-h-max relative">
        <div className="w-full h-[1px] bg-white absolute top-[50%]"></div>
        <div className="h-full grid justify-items-center">
          <div className="w-max bg-primary px-[49px] z-[1] grid content-center">
            <img className="h-[24px] md:h-[36px]" src="media/images/logo-white.svg" alt="logo" />
          </div>
        </div>
      </div>
      <div className="w-[80%] h-max bg-primary flex justify-between max-sm:grid max-sm:grid-cols-1 gap-6 text-white">
        <div className="grid gap-6">
          <div>
            <p className="text-xs">Телефонный Номер</p>
            <p className="text-sm">+7(456)4545556523</p>
          </div>
          <div>
            <p className="text-xs">Адрес</p>
            <p className="text-sm">Зубово-Полянский район</p>
          </div>
        </div>
        <div className="hidden grid-rows-3 grid-cols-2 w-max gap-x-16 2md:grid">
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
        </div>
        <div>
          <p className="text-xs">Мы в социальных сетях</p>
          <div className="grid grid-cols-3 w-max gap-6 text-sm">
            <div className="w-[40px] border-[1px] border-white rounded-full p-3">
              <img src="media/images/instagram.svg" alt="instagram icon" />
            </div>
            <div className="w-[40px] border-[1px] border-white rounded-full p-3">
              <img src="media/images/facebook.svg" alt="facebook icon" />
            </div>
            <div className="w-[40px] border-[1px] border-white rounded-full p-3">
              <img src="media/images/telegram.svg" alt="telegram icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
