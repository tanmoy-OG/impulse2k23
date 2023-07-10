const EachEvent = ({ pic, desc, time, fees, show }) => {
  return (
    <div style={{backgroundImage: `url(${pic})`}} 
     className="bg-no-repeat bg-cover bg-center flex flex-col justify-end bg-sky-950 rounded-xl h-32 350px:h-52 sm:h-96 w-2/3 lg:w-1/2 m-auto p-0 md:my-10 transition-all duration-1000 group"
     >
      <div className="flex flex-col w-full text-left gap-6 bg-black/70 backdrop-blur-lg px-5 group-hover:py-5 h-0 group-hover:h-96 transition-all duration-1000 rounded-xl overflow-auto overflow-x-hidden">
        <p className="text-xs">{desc}</p>
        {show ? (
          <div className="w-full flex flex-col md:flex-row justify-between items-start gap-5">
            <div className="flex flex-col w-fit gap-3">
              <h1 className="font-bold uppercase tracking-widest text-white text-xs">
                {time}
              </h1>
              <h1 className="font-bold uppercase tracking-widest text-white text-xs">
                {fees}
              </h1>
            </div>
            <a
              href="#"
              className="bg-sky/20 text-white font-bold tracking-widest bg-slate-600 p-2 rounded-xl cursor-pointer text-xs"
            >
              REGISTER
            </a>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default EachEvent;
