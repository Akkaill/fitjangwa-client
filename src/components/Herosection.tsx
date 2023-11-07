"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

export const Herosection = () => {
  return (
    <div className="flex justify-center items-center w-full container">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        spaceBetween={70}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        className=""
      >
        <SwiperSlide className="relative  ">
          <Image
            src="/Logomuscle.jpg"
            alt="testpic"
            width={2000}
            height={2000}
            className="z-10 flex justify-center items-center "
          ></Image>
          <p className="text-center z-1 left-1/4 right-1/4 top-[50%] absolute text-red-500">
            PIC 100
          </p>
        </SwiperSlide>
        <SwiperSlide className="relative  ">
          {" "}
          <Image
            src="/Logomuscle.jpg"
            alt="testpic"
            width={2000}
            height={2000}
            className="z-20 "
          ></Image>
          <p className=" text-center left-1/4 right-1/4 top-[50%] absolute text-red-500">
            PIC 200
          </p>
        </SwiperSlide>
        <SwiperSlide className="relative  ">
          {" "}
          <Image
            src="/Logomuscle.jpg"
            alt="testpic"
            width={2000}
            height={2000}
            className="z-30"
          ></Image>
          <p className="text-center mb-10 z-3 left-1/4 right-1/4 top-[50%] absolute text-red-500">
            PIC 300
          </p>
        </SwiperSlide>
        <SwiperSlide className="relative  ">
          {" "}
          <Image
            src="/Logomuscle.jpg"
            alt="testpic"
            width={2000}
            height={2000}
            className="z-40"
          ></Image>
          <p className="text-center z-4 left-1/4 right-1/4 top-[50%] absolute text-red-500">
            PIC 400
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
