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
        className="text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-wide uppercase"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
      >
        ABOUT IMPULSE
      </h1>
      <p
        className="pt-10 sm:text-xl 2xl:text-2xl text-justify leading-10"
        data-aos="fade-right"
        data-aos-delay="500"
        data-aos-easing="ease-in-out"
      >
        Impulse is the cultural fest of BIT, which is a platform open for our
        and various other college students to showcase their potential and
        creativity in the cultural events &amp; finally the evening is
        culminated by the performance of renowned guest artists which mesmerizes
        the audience and gives them an evening to remember
      </p>
    </div>
  );
};

export default About;
