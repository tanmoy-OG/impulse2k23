const About = () => {
  return (
    <div className="flex flex-col pl-20 pr-20 bg-black/50 backdrop-blur-sm" id="about">
      <h1
        className="p-10 pb-5 text-5xl font-bold tracking-wider text-neutral-200"
        data-aos="fade-up"
      >
        ABOUT IMPULSE
      </h1>
      <p
        className="pb-10 pl-20 pr-20 text-2xl leading-10 text-left text-neutral-300"
        data-aos="fade-right"
        data-aos-delay="1000"
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