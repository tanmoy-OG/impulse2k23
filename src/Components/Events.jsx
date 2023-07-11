import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../assets/App.css";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import EachEvent from "./EachEvent";

const Events = () => {

  const [screensize,setScreenSize] = useState(0);
  useEffect(()=>{
    setScreenSize(window.innerWidth);
  });

  return (
    <div className="event-parent flex flex-col pt-16">
      <h1
        className="text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-wide uppercase"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
      >
        EVENTS
      </h1>
      <Swiper
        effect={"coverflow"}
        slidesPerView={"auto"}
        spaceBetween={0}
        navigation={(screensize > 400)?true:false}
        centeredSlides={true}
        // autoplay={{
        //   delay: 4000,
        //   disableOnInteraction: true,
        // }}
        coverflowEffect={{
          rotate: 100,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="w-full mt-10"
      >
        <SwiperSlide>
          <EachEvent
            pic={"ramp-on-fire.jpg"}
            desc="BATTLE OF BEATS IS A SHOWCASE OF INCREDIBLE DANCE
            TALENT AND AN EMBODIMENT OF THE TRANSFORMATIVE
            POWER OF MOVEMENT AND ARTISTIC EXPRESSION. HERE
            PARTICIPANTS FROM DIFFERENT COLLEGES COME
            TOGETHER TO CREATE A VIBRANT AND DYNAMIC
            COMMUNITY, PROMOTING CULTURAL EXCHANGE,
            FRIENDSHIP, AND A LIFELONG LOVE FOR DANCE. FROM
            CONTEMPORARY AND HIP-HOP TO CLASSICAL AND
            CULTURAL FORMS, THIS INTER COLLEGE DANCE
            COMPETITION SHOWCASES THE DIVERSITY OF DANCE
            STYLES WHILE FOSTERING FRIENDLY COMPETITION AND
            CAMARADERIE AMONG PARTICIPATING COLLEGES."
            time="LAST DATE OF REGISTRATION : 14TH JULY"
            fees="REGISTRATION FEE :- RS.600"
            show={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <EachEvent
            pic={"ramp-on-fire.jpg"}
            desc="VOICE OF IMPULSE BRINGS TOGETHER THE BEST OF
            MUSICAL TALENT, FOSTERING CREATIVITY,
            COLLABORATION, AND A LOVE FOR MELODIES THAT
            TRANSCEND BOUNDARIES. AS THE PERFORMERS TAKE
            CENTER STAGE, THEY WEAVE A TAPESTRY OF EMOTIONS
            THROUGH THEIR MUSIC, LEAVING THE AUDIENCE
            SPELLBOUND. THIS INTER-COLLEGE COMPETITION
            EMBRACES MUSICAL DIVERSITY, ALLOWING PARTICIPANTS
            TO EXPLORE AND BLEND DIFFERENT GENRES, STYLES, AND
            INFLUENCES. IT SHOWCASES THE RICH TAPESTRY OF
            MUSICAL EXPRESSIONS AND ENCOURAGES
            EXPERIMENTATION, RESULTING IN PERFORMANCES THAT
            ARE BOTH INNOVATIVE AND EMOTIONALLY CAPTIVATING.
            THIS COMPETITION GIVES US AN ENCHANTING EVENING
            FILLED WITH CAPTIVATING MELODIES, BREATHTAKING
            HARMONIES, AND THE CELEBRATION OF MUSICAL TALENT"
            time="LAST DATE OF REGISTRATION : 14TH JULY"
            fees="REGISTRATION FEE :- RS.100"
            show={true}
          />
        </SwiperSlide>
        <SwiperSlide>
          <EachEvent
            pic={"ramp-on-fire.jpg"}
            desc="WITNESS A GLAMOROUS SHOWCASE OF
            FASHION, CONFIDENCE, AND POISE AS RAMP-ON-
            FIRE TAKES CENTER STAGE. THIS DAZZLING
            EVENT BRINGS TOGETHER STUDENTS FROM OUR
            COLLEGE, AS THEY SASHAY DOWN THE RUNWAY
            WITH ELEGANCE, GRACE, AND A DASH OF
            CHARISMA. WITH IMPECCABLE STYLE,
            INNOVATIVE DESIGNS, AND A CELEBRATION OF
            INDIVIDUALITY, THIS RAMP WALK COMPETITION
            IS A PLATFORM FOR STUDENTS TO EMBRACE THE
            WORLD OF FASHION AND MAKE A BOLD
            STATEMENT."
          />
        </SwiperSlide>
        <SwiperSlide>
          <EachEvent
            pic={"ramp-on-fire.jpg"}
            desc="IMMERSE YOURSELF IN THE WORLD OF THEATER
            AS WE BRING YOU AN EXTRAORDINARY
            THEATRICAL EXPERIENCE THAT WILL LEAVE YOU
            SPELLBOUND. THE PRODUCTION BOASTS A
            DYNAMIC MIX OF SEASONED PERFORMERS AND
            FRESH TALENTS, ALL DRIVEN BY THEIR PASSION
            FOR THE DRAMATIC ARTS. OUR DEDICATED TEAM
            OF DIRECTORS, SET DESIGNERS, AND COSTUME
            ARTISTS HAVE PAINSTAKINGLY CRAFTED AN
            IMMERSIVE STAGE EXPERIENCE THAT WILL
            CAPTIVATE YOUR SENSES AND LEAVE A LASTING
            IMPRESSION."
          />
        </SwiperSlide>
        <SwiperSlide>
          <EachEvent
            pic={"ramp-on-fire.jpg"}
            desc="RECITATION IS A HIGHLY ANTICIPATED EVENT
            AND IS AN OPPORTUNITY FOR STUDENTS
            FROM ALL DEPARTMENTS TO UNLEASH THEIR
            INNER ORATORS AND CAPTIVATE THE
            AUDIENCE WITH THE MAGIC OF THEIR SPOKEN
            WORDS. HERE OUR ASPIRING POETS AND
            ELOQUENT WORDSMITHS SHOWCASE THEIR
            BRILLIANCE AND SET THE STAGE ABLAZE WITH
            THEIR LITERARY PROWESS."
          />
        </SwiperSlide>
        <SwiperSlide>
          <EachEvent
            pic={"ramp-on-fire.jpg"}
            desc="IN THE ENCHANTING EVENING OF COUPLE DANCE
            AT OUR UPCOMING COLLEGE CULTURAL EVENT
            FEST - IMPULSE 2K23,AN EPITOME OF GRACE,
            ELEGANCE, AND CHEMISTRY IS WITNESSED.STEP
            INTO A WORLD WHERE TWO BODIES MOVE AS ONE,
            WHERE EMOTIONS FIND EXPRESSION THROUGH
            EVERY GRACEFUL MOVEMENT, AND WHERE THE
            LANGUAGE OF LOVE UNFOLDS ON THE DANCE
            FLOOR. EACH DANCE PIECE UNFOLDS A UNIQUE
            STORY, WEAVING TOGETHER INTRICATE
            CHOREOGRAPHY, HEARTFELT EMOTIONS, AND
            SEAMLESS SYNCHRONY. THE DANCERS WILL TAKE
            YOU ON A CAPTIVATING JOURNEY, WHERE EVERY
            STEP, SPIN, AND LIFT RADIATES A PROFOUND
            CONNECTION BETWEEN PARTNERS, TRANSCENDING
            BOUNDARIES AND INSPIRING AWE."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Events;
