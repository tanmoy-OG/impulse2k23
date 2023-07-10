import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../App.css";
import { EffectCoverflow, Pagination } from "swiper/modules";
import pic from "../../public/band1.jpg";
import EachEvent from "./EachEvent";

const Events = () => {
  return (
    <div className="event-parent flex flex-col pt-16 gap-6 lg:gap-10">
      <h1
        className="mb-4 text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-wide uppercase"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
      >
        EVENTS
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <EachEvent
            pic={pic}
            title="Event title"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, alias aspernatur labore beatae dignissimos at consequuntur in? Nobis commodi dolorem temporibus ducimus sit. Et, minima perspiciatis ex voluptas adipisci deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, alias aspernatur labore beatae dignissimos at consequuntur in? Nobis commodi dolorem temporibus ducimus sit. Et, minima perspiciatis ex voluptas adipisci deleniti END"
          />
        </SwiperSlide>
        <SwiperSlide>
          <EachEvent
            pic={pic}
            title="Event title"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, alias aspernatur labore beatae dignissimos at consequuntur in? Nobis commodi dolorem temporibus ducimus sit. Et, minima perspiciatis ex voluptas adipisci deleniti?"
          />
        </SwiperSlide>
        <SwiperSlide>
          <EachEvent
            pic={pic}
            title="Event title"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, alias aspernatur labore beatae dignissimos at consequuntur in? Nobis commodi dolorem temporibus ducimus sit. Et, minima perspiciatis ex voluptas adipisci deleniti?"
          />
        </SwiperSlide>
        <SwiperSlide>
          <EachEvent
            pic={pic}
            title="Event title"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, alias aspernatur labore beatae dignissimos at consequuntur in? Nobis commodi dolorem temporibus ducimus sit. Et, minima perspiciatis ex voluptas adipisci deleniti?"
          />
        </SwiperSlide>
        <SwiperSlide>
          <EachEvent
            pic={pic}
            title="Event title"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, alias aspernatur labore beatae dignissimos at consequuntur in? Nobis commodi dolorem temporibus ducimus sit. Et, minima perspiciatis ex voluptas adipisci deleniti?"
          />
        </SwiperSlide>
        <SwiperSlide>
          <EachEvent
            pic={pic}
            title="Event title"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, alias aspernatur labore beatae dignissimos at consequuntur in? Nobis commodi dolorem temporibus ducimus sit. Et, minima perspiciatis ex voluptas adipisci deleniti?"
          />
        </SwiperSlide>
        <SwiperSlide>
          <EachEvent
            pic={pic}
            title="Event title"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, alias aspernatur labore beatae dignissimos at consequuntur in? Nobis commodi dolorem temporibus ducimus sit. Et, minima perspiciatis ex voluptas adipisci deleniti?"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Events;
