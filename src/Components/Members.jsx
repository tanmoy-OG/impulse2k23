import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

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
        spaceBetween={0}
        navigation={true}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
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
        <SwiperSlide className="h-fit w-fit rounded-2xl">
          <CardUi
            pic={"/team/convenor.jpeg"}
            name={"Prof. Kuntala Das"}
            designation={"convener"}
          />
        </SwiperSlide>
        <SwiperSlide className="h-fit w-fit rounded-2xl">
          <CardUi
            pic={"/team/coordinator.jpeg"}
            name={"Dr. Madhusudan Debnath"}
            designation={"coordinator"}
          />
        </SwiperSlide>
        <SwiperSlide className="h-fit w-fit rounded-2xl">
          <CardUi
            pic={"/team/coordinator.jpeg"}
            name={"Shreyan Dey"}
            designation={"General Secretary"}
          />
        </SwiperSlide>
        <SwiperSlide className="h-fit w-fit rounded-2xl">
          <CardUi
            pic={"/team/ags1.jpeg"}
            name={"Simran Samanta"}
            designation={"Asst General Secretary"}
            // git={"sae"}
            link={"https://www.linkedin.com/in/simran-samanta-563993223"}
            // tweet={"zxvvsd"}
            face={"https://www.facebook.com/profile.php?id=100010407793894"}
            insta={"https://instagram.com/simran.samanta"}
          />
        </SwiperSlide>
        <SwiperSlide className="h-fit w-fit rounded-2xl">
          <CardUi
            pic={"/team/ags2.jpeg"}
            name={"Shivam Sinha"}
            designation={"Asst General Secretary"}
          />
        </SwiperSlide>
        <SwiperSlide className="h-fit w-fit rounded-2xl">
          <CardUi
            pic={"/team/cs.jpeg"}
            name={"Pratim Sen Sharma"}
            designation={"Cultural Secretary"}
          />
        </SwiperSlide>
        <SwiperSlide className="h-fit w-fit rounded-2xl">
          <CardUi
            pic={"/team/acs1.jpeg"}
            name={"Pratisruti Chatterjee"}
            designation={"Asst Cultural Secretary"}
          />
        </SwiperSlide>
        <SwiperSlide className="h-fit w-fit rounded-2xl">
          <CardUi
            pic={"/team/acs2.jpeg"}
            name={"Srish Bannerjee"}
            designation={"Asst Cultural Secretary"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

const CardUi = (props) => {
  return (
    <div className="bg-violet-300 hover:bg-violet-200 rounded-2xl h-full w-full pt-4 pb-4 transition-all duration-500 group">
      <div className="rounded-full h-48 w-48 mb-4 ml-10 mr-10 border-8 border-violet-400 overflow-hidden">
        <img
          className="rotate-6 group-hover:rotate-0 group-hover:scale-125 transition-all duration-500"
          src={props.pic}
          alt=""
        />
      </div>
      <h1 className="text-xs tracking-wide mb-0 uppercase">
        {props.designation}
      </h1>
      {/* <img className="w-60 mt-0 mx-auto" src="divider.png" alt="" /> */}
      <img className="w-60 mt-0 mx-auto" src="divider.png" alt="" />
      <h1 className="mb-4 text-lg tracking-wide">{props.name}</h1>
      <div className="flex justify-center gap-2 mb-4 text-violet-500">
        <a
          href={props.git}
          className={`${
            props.git ? "felx" : "hidden"
          } text-4xl hover:transition-all hover:scale-110 hover:-translate-y-1 transition-all duration-500`}
        >
          <FaGithub />
        </a>
        <a
          href={props.link}
          className={`${
            props.link ? "felx" : "hidden"
          } text-4xl hover:transition-all hover:scale-110 hover:-translate-y-1 transition-all duration-500`}
        >
          <FaLinkedin />
        </a>
        <a
          href={props.tweet}
          className={`${
            props.tweet ? "felx" : "hidden"
          } text-4xl hover:transition-all hover:scale-110 hover:-translate-y-1 transition-all duration-500`}
        >
          <FaTwitter />
        </a>
        <a
          href={props.face}
          className={`${
            props.face ? "felx" : "hidden"
          } text-4xl hover:transition-all hover:scale-110 hover:-translate-y-1 transition-all duration-500`}
        >
          <FaFacebook />
        </a>
        <a
          href={props.insta}
          className={`${
            props.insta ? "felx" : "hidden"
          } text-4xl hover:transition-all hover:scale-110 hover:-translate-y-1 transition-all duration-500`}
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default Members;
