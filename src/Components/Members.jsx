import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";

const Members = () => {
  return (
    <div className="">
      <h1
        className="p-10 pb-5 text-5xl font-bold tracking-wider text-neutral-200 uppercase"
        data-aos="fade-up"
      >
        Core Team
      </h1>
      <Swiper
        effect={"coverflow"}
        slidesPerView={"auto"}
        loop={true}
        spaceBetween={0}
        navigation={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
        }}
        modules={[Autoplay, EffectCoverflow, Navigation]}
        className="w-full"
      >
        <SwiperSlide className="bg-red-500 h-96 w-72 pt-4 rounded-2xl">
          <CardUi pic={"/team/convenor.jpeg"} />
        </SwiperSlide>
        <SwiperSlide className="bg-red-500 h-96 w-72 pt-4 rounded-2xl">
          <CardUi pic={"/team/coordinator.jpeg"} />
        </SwiperSlide>
        <SwiperSlide className="bg-red-500 h-96 w-72 pt-4 rounded-2xl">
          <CardUi pic={"/team/coordinator.jpeg"} />
        </SwiperSlide>
        <SwiperSlide className="bg-red-500 h-96 w-72 pt-4 rounded-2xl">
          <CardUi pic={"/team/ags1.jpeg"} />
        </SwiperSlide>
        <SwiperSlide className="bg-red-500 h-96 w-72 pt-4 rounded-2xl">
          <CardUi pic={"/team/ags2.jpeg"} />
        </SwiperSlide>
        <SwiperSlide className="bg-red-500 h-96 w-72 pt-4 rounded-2xl">
          <CardUi pic={"/team/cs.jpeg"} />
        </SwiperSlide>
        <SwiperSlide className="bg-red-500 h-96 w-72 pt-4 rounded-2xl">
          <CardUi pic={"/team/acs1.jpeg"} />
        </SwiperSlide>
        <SwiperSlide className="bg-red-500 h-96 w-72 pt-4 rounded-2xl">
          <CardUi pic={"/team/acs2.jpeg"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

const CardUi = (props) => {
  return (
    <div className="h-full w-full">
      <img
        className="rounded-full w-3/4 mx-auto border-8"
        src={props.pic}
        alt=""
      />
    </div>
  );
};

export default Members;
