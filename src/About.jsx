export const About = () => {
  return (
    <div className="flex flex-col pl-20 pr-20" id="about">
      <div className="bg-neutral-800 h-80 w-full left-0 absolute mix-blend-overlay"></div>
      <h1
        className="p-10 text-5xl font-bold tracking-wider text-neutral-200"
        data-aos="fade-up"
      >
        ABOUT IMPULSE
      </h1>
      <p
        className="pb-10 text-2xl text-left text-neutral-300"
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
