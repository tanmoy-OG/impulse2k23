import Timer from "./Timer";

const Present = ({ duration }) => {
  return (
    <div className="flex flex-col justify-evenly h-screen gap-2 lg:gap-4 pb-20 pl-4 pr-4 sm:pl-16 sm:pr-16">
      <h1
        className="text-3xl sm:text-5xl xl:text-6xl font-bold tracking-wide uppercase text-pink-600"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
      >
        BENGAL INSTITUTE OF TECHNOLOGY
      </h1>
      <h1
        className="text-2xl sm:text-3xl text-sky-600"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-easing="ease-in-out"
      >
        PRESENTS
      </h1>
      <div className="flex justify-center ml-4 mr-4">
        <img
          src="logo.png"
          alt="Impulse2k23 Logo"
          className="w-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        />
      </div>
      <Timer duration={duration} />
      {/* <div className="relative"><div className="absolute bg-red-600">s</div></div> */}
    </div>
  );
};

export default Present;
