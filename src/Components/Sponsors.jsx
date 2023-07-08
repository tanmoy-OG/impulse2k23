const Sponsors = () => {
  return (
    <div className="flex flex-col pl-20 pr-20 pb-20 backdrop-blur-sm">
      <h1
        className="p-10 pb-5 text-5xl font-bold tracking-wider text-neutral-200 uppercase"
        data-aos="fade-up"
      >
        Our Sponsors
      </h1>
      <div className="sponsor flex justify-center flex-wrap mt-10">
        <img src="/sponsors/sponsor1.png" alt="" className="w-1/5" />
      </div>
    </div>
  );
};

export default Sponsors;
