const About = () => {
  return (
    <div
      className="flex flex-col w-full pt-10 pb-20 pl-10 pr-10 sm:pl-16 sm:pr-16 md:pl-20 md:pr-20 lg:pl-24 lg:pr-24 xl:pl-28 xl:pr-28 bg-black/50"
      id="about"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <h1
        className="text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-wide uppercase font-serif"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
      >
        ABOUT IMPULSE
      </h1>
      <div
        className="pt-10 flex flex-col gap-4 sm:text-xl 2xl:text-2xl text-justify tracking-wider leading-relaxed font-serif"
        data-aos="fade-right"
        data-aos-delay="500"
        data-aos-easing="ease-in-out"
      >
        <p
          className="indent-6"
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-easing="ease-in-out"
        >
          BENGAL INSTITUTE OF TECHNOLOGY IS ORGANISING IT’S ANNUAL CULTURAL FEST
          – IMPULSE 2K23 ON 19TH & 20TH OF JULY 2023.
        </p>
        <p
          className="indent-6"
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-easing="ease-in-out"
        >
          IMPULSE 2K23 IS AN UNFORGETTABLE CELEBRATION OF DIVERSITY, CREATIVITY
          AND CULTURAL EXCHANGE. THIS IS AN INCREDIBLE OPPORTUNITY TO EXPERIENCE
          THE RICHNESS OF OUR COLLEGE COMMUNITY. THE EVENT INCLUDES FROM
          CAPTIVATING DANCE ROUTINES TO SOUL-STIRRING MUSIC PERFORMANCES AND
          CAPTIVATING THEATRICAL ACTS ALONG WITH A RAMP WALK EVENT WHICH IS A
          JOURNEY THROUGH DIFFERENT CULTURES AND TRADITIONS.
        </p>
        <p
          className="indent-6"
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-easing="ease-in-out"
        >
          IMPULSE 2k23 PROMISES TO BE AN EXHILARATING EXPERIENCE THAT WILL LEAVE
          ALL OF US ENLIGHTENED AND INSPIRED. JOIN US AS WE COME TOGETHER TO
          EMBRACE DIVERSITY, NURTURE CREATIVITY, AND FOSTER GLOBAL HARMONY.
        </p>
      </div>
    </div>
  );
};

export default About;
