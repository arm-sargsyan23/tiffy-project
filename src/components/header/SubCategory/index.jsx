/* swiper components */

// import { Navigation } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

/* swiper styles */

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

export default function MenuForSubCategory({ menuForSubCategory, setMenuForSubCategory }) {
  return (
    <div className="w-full bg-white top-[129px] sm:top-[83px] 2md:top-[133px] lg:top-[83px] z-50 absolute">
      {/* <Swiper
        modules={[Navigation]}
        navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn", clickable: true }}
        slidesPerView={2}
        className="w-[50%]"
      >
        <>
          <SwiperSlide className="w-[210px]">
            <div className=" h-full flex justify-center items-center bg-primary">Brand 1</div>
          </SwiperSlide>
          <SwiperSlide className="w-[210px]">
            <div className=" h-full flex justify-center items-center bg-primary">Brand 2</div>
          </SwiperSlide>
          <SwiperSlide className="w-[210px]">
            <div className=" h-full flex justify-center items-center bg-primary">Brand 3</div>
          </SwiperSlide>
          <SwiperSlide className="w-[210px]">
            <div className=" h-full flex justify-center items-center bg-primary">Brand 4</div>
          </SwiperSlide>
          <SwiperSlide className="w-[210px]">
            <div className=" h-full flex justify-center items-center bg-primary">Brand 5</div>
          </SwiperSlide>
          <SwiperSlide className="w-[210px]">
            <div className=" h-full flex justify-center items-center bg-primary">Brand 6</div>
          </SwiperSlide>
          <SwiperSlide className="w-[210px]">
            <div className=" h-full flex justify-center items-center bg-primary">Brand 7</div>
          </SwiperSlide>
          <SwiperSlide className="w-[210px]">
            <div className=" h-full flex justify-center items-center bg-primary">Brand 8</div>
          </SwiperSlide>
          <SwiperSlide className="w-[210px]">
            <div className=" h-full flex justify-center items-center bg-primary">Brand 9</div>
          </SwiperSlide>
          <SwiperSlide className="w-[210px]">
            <div className=" h-full flex justify-center items-center bg-primary">Brand 10</div>
          </SwiperSlide>
        </>
        <div className="w-full flex justify-center">
          <button className="prev-btn w-[50px] h-[50px]">
            <img className="" src="media/images/back.svg" alt="icon" />
          </button>
          <button className="next-btn w-[50px] h-[50px] rotate-180">
            <img className="" src="media/images/back.svg" alt="icon" />
          </button>
        </div>
      </Swiper> */}
      <div
        className={`grid transition-all duration-300 ease-in-out overflow-hidden ${menuForSubCategory.isActive ? "grid-rows-[100px]" : "grid-rows-[0px]"}`}
      >
        <div className="overflow-hidden">
          <div
            onClick={() => {
              setMenuForSubCategory({ isActive: false });
            }}
            className="w-[35px] border-[1px] border-primary rounded-full p-2"
          >
            <img src="media/images/back.svg" alt="back icon" />
          </div>
          <p>{menuForSubCategory.name}</p>
        </div>
      </div>
    </div>
  );
}
