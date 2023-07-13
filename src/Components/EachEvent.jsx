const EachEvent = ({ pic, desc, time, fees, rule, show }) => {
  return (
    <div
      style={{ backgroundImage: `url(${pic})` }}
      className="bg-no-repeat bg-contain bg-center flex flex-col justify-end bg-transparent rounded-xl h-96  sm:h-96 w-5/6 sm:w-3/4 lg:w-2/3 m-auto mb-10 p-0 md:my-10 transition-all duration-1000 group"
    >
      <div className="flex flex-col w-full text-left gap-6 bg-black/70 backdrop-blur-lg px-5 group-hover:py-5 h-0 group-hover:h-96 transition-all duration-1000 rounded-xl overflow-auto overflow-x-hidden">
        {show ? (
          <div className="w-full flex flex-col md:flex-row justify-between items-start gap-5 pb-5">
            <div className="flex flex-col w-fit gap-3">
              <h1 className="font-bold uppercase tracking-widest text-fuchsia-500 text-xs">
                {time}
              </h1>
              <h1 className="font-bold uppercase tracking-widest text-rose-500 text-xs">
                {fees}
              </h1>
            </div>
            <a
              href="#"
              className="bg-sky/20 text-green-800 hover:text-lime-200 font-bold tracking-widest bg-lime-500 hover:bg-green-600 p-2 rounded-xl cursor-pointer text-xs transition-all duration-200 font-sans"
            >
              REGISTER
            </a>
          </div>
        ) : (
          <></>
        )}
        <h1 className="text-base uppercase font-bold tracking-wider">
          about the event
        </h1>
        <p className="pb-5 text-xs sm:text-md text-justify hyphens-auto tracking-wider leading-relaxed font-serif">
          {desc}
        </p>
        {show ? (
          <div className="w-full flex flex-col gap-6 pb-5">
            <h1 className="text-base uppercase font-bold tracking-wider">
              about the event
            </h1>
            <div className="pb-5 text-xs sm:text-md text-justify hyphens-auto tracking-wider leading-relaxed font-serif">
              <p>{rule[0]}</p>
              <p>{rule[1]}</p>
              <p>{rule[2]}</p>
              <p>{rule[3]}</p>
              <p>{rule[4]}</p>
              <p>{rule[5]}</p>
              <p>{rule[6]}</p>
              <p>{rule[7]}</p>
              <p>{rule[8]}</p>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default EachEvent;
