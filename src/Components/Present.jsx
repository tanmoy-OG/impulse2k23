import Timer from "./Timer";

const Present = ({ duration }) => {
  return (
    <div
      className="flex flex-col justify-center h-screen sm:h-fit gap-6 lg:gap-4 2xl:gap-10 pt-10 xl:pt-2 2xl:pt-8 pb-32 2xl:pb-0 pl-4 pr-4 sm:pl-16 sm:pr-16 2xl:mb-40"
      id="home"
    >
      <h1
        className="text-3xl sm:text-5xl xl:text-5xl 2xl:text-7xl font-bold tracking-wide uppercase text-pink-600 z-20 font-serif"
        data-aos="fade-up"
      >
        BENGAL INSTITUTE OF TECHNOLOGY
      </h1>
      <h1
        className="text-2xl sm:text-3xl 2xl:text-5xl text-sky-600 z-20 font-serif italic"
        data-aos="fade-up"
      >
        PRESENTS
      </h1>
      <div className="flex justify-center ml-4 mr-4">
        <img
          src="logo.png"
          alt="Impulse2k23 Logo"
          className="w-3/4 lg:w-1/3 xl:w-1/4 2xl:w-3/7 z-20"
        />
      </div>
      <Timer duration={duration} />
    </div>
  );
};

export default Present;
