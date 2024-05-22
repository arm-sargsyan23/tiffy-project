import NavigateButton from "../../components/nav-btn";

export default function HomePage() {
  return (
    <main className="w-full xs:mt-[129px] sm:mt-[83px]">
      <div className="w-full h-[620px] bg-white py-10 mb-[120px] flex justify-end mt-[40px]">
        <div className="w-[90%] min-h-max bg-white flex">
          <div className="w-[40%] bg-white flex flex-col justify-center gap-y-6">
            <p className="text-xl">Весна 2023 коллекция</p>
            <p className="text-sm">
              Наша весенняя коллекция 2023 - это сочетание современных трендов и классических элементов, которые подходят для
              любого возраста и стиля. Оставайся на вершине моды и выбирай лучшее c нами!
            </p>
            <NavigateButton name={"Коллекция"} />
          </div>
          <div className="w-[60%] h-full bg-white pl-[10px]">
            <div className="w-full h-full bg-primary">Image</div>
          </div>
        </div>
      </div>
    </main>
  );
}
