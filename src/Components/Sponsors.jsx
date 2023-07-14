const Sponsors = () => {
  return (
    <div className="flex flex-col pt-16 pb-20 pl-10 pr-10 sm:pl-16 sm:pr-16" id="sponsors">
      <h1
        className="mb-4 text-4xl sm:text-5xl 2xl:text-6xl font-bold tracking-wide uppercase font-serif"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
      >
        radio partner
      </h1>
      <div className="flex justify-evenly flex-wrap gap-10 my-20">
        <img
          src="/sponsors/sponsor1.webp"
          alt=""
          className="w-60 sm:w-1/2 md:w-1/4 lg:w-1/5"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        />
      </div>
    </div>
  );
};

export default Sponsors;
