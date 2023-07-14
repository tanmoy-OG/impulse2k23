import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../assets/App.css";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import EachEvent from "./EachEvent";

const Events = () => {
  const [screensize, setScreenSize] = useState(0);
  useEffect(() => {
    setScreenSize(window.innerWidth);
  });
  const rule0 = [
    "• YOU MUST CARRY YOUR COLLEGE ID CARD",
    "• MINIMUM NO. OF PARTICIPANTS IN A TEAM - 6, MAXIMUM NO. OF PARTICIPANTS IN A TEAM - 10 (NO SOLO OR DUET PERFORMANCE)",
    "• PARTICIPANTS HAVE TO BRING THEIR OWN PROPS (NEED TO AWARE US BEFOREHAND) AND MUSIC",
    "• TIME LIMIT : 1+5 MINS FOR EACH TEAM",
    "• NO RESTRICTIONS TO DANCE FORMS",
    "• DANCE THAT REPRESENTS OR HURTS ANY POLITICAL OR RELIGIOUS SENTIMENTS, ARE NOT ALLOWED",
    "• THE TRACK NEED TO BE SUBMITTED BEFORE 14TH JULY",
    "• PARTICIPATION IS LIMITED TO 1 TEAM FROM EACH COLLEGE",
    "• IT IS COMPULSORY FOR THE STUDENTS TO BRING THEIR RESPECTIVE COLLEGE IDENTITY CARDS.",
  ];
  const rule1 = [
    "• YOU MUST CARRY YOUR COLLEGE ID CARD",
    "• SOLO PERFORMANCE ( +1 MUSICIAN IS ALLOWED)",
    "• TIME LIMIT: 1+4 MINS (INCLUDING STAGE SET UP)",
    "• MUST BE A BENGALI/HINDI/ENGLISH SONG",
    "• ORIGINAL COMPOSITIONS ARE WELCOMED",
    "• NO INSTRUMENTS WILL BE PROVIDED BY THE ORGANIZERS",
    "• PARTICIPANTS CANNOT USE KARAOKE",
    "• USE OF ANY VULGAR WORDS OR ANY IMPROPER ACTION DURING THE PERFORMANCE WILL LEAD TO DISQUALIFICATION OF THE PARTICIPANT IMMEDIATELY",
    "",
  ];
  const rule2 = ["", "", "", "", "", "", "", "", ""];
  return (
    <div className="event-parent flex flex-col pt-16 font-serif">
      <h1
        className="mb-8 text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-wide uppercase"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
      >
        EVENTS
      </h1>
      <Swiper
        effect={"coverflow"}
        slidesPerView={"auto"}
        spaceBetween={0}
        // navigation={screensize > 400 ? true : false}
        navigation={true}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        coverflowEffect={{
          rotate: 100,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        // className="mySwiper"
        className=" w-full mt-10 sm:mt-0"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <SwiperSlide>
          <EachEvent
            pic={"/events/bob.webp"}
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
            fees="REGISTRATION FEE : RS.600"
            rule={rule0}
            show={true}
            link="https://forms.gle/Fp72Yapvrgft7mwn9"
          />
        </SwiperSlide>
        <SwiperSlide>
          <EachEvent
            pic={"/events/vip.webp"}
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
            fees="REGISTRATION FEE : RS.100"
            rule={rule1}
            show={true}
            link="https://forms.gle/59aAgPQtK31qXsAf9"
          />
        </SwiperSlide>
        <SwiperSlide>
          <EachEvent
            pic={"/events/rof.webp"}
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
            rule={rule2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <EachEvent
            pic={"/events/d.webp"}
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
            rule={rule2}
          />
        </SwiperSlide>
        {/* <SwiperSlide>
          <EachEvent
            pic={"/events/vip.jpeg"}
            desc="RECITATION IS A HIGHLY ANTICIPATED EVENT
            AND IS AN OPPORTUNITY FOR STUDENTS
            FROM ALL DEPARTMENTS TO UNLEASH THEIR
            INNER ORATORS AND CAPTIVATE THE
            AUDIENCE WITH THE MAGIC OF THEIR SPOKEN
            WORDS. HERE OUR ASPIRING POETS AND
            ELOQUENT WORDSMITHS SHOWCASE THEIR
            BRILLIANCE AND SET THE STAGE ABLAZE WITH
            THEIR LITERARY PROWESS."
            rule={rule2}
          />
        </SwiperSlide> */}
        <SwiperSlide>
          <EachEvent
            pic={"/events/cd.webp"}
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
            rule={rule2}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Events;
