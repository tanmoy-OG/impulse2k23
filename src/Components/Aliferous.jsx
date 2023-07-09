const Aliferous = () => {
  return (
    <div className="flex flex-col space-y-8 pb-20 h-fit">
      <h1
        className="m-auto textBG text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-widest text-transparent bg-clip-text"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        ALIFEROUS
      </h1>
      <div
        className="wing m-auto text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-indigo-700 flex flex-col sm:flex-row justify-center xl:text-7xl font-bold tracking-widest duration-700 hover:scale-150 sm:hover:scale-110 group"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <h1 className=" sm:mr-4 transition-all lg:group-hover:mr-10 duration-1000">
          UNLEASH
        </h1>
        <h1 className="sm:ml-4 sm:mr-4 group-hover:ml-8 group-hover:mr-8 xl:group-hover:ml-10 xl:group-hover:mr-10 transition-all duration-1000">
          YOUR
        </h1>
        <h1 className="sm:ml-4 transition-all lg:group-hover:ml-10 duration-1000">
          WINGS
        </h1>
      </div>
    </div>
  );
};

export default Aliferous;
