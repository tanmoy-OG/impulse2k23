const EachEvent = ({ pic, title, desc }) => {
  // if()

  return (
    <div className="cust-height flex flex-col sm:h-fit">
      <img src={pic} className="h-full w-full z-10" />
      <div className="sm:absolute bottom-0 z-30 flex flex-col w-full text-left gap-2 bg-white/10 p-10 pt-5">
        <h1 className="font-bold uppercase">{title}</h1>
        <p className="text-sm overflow-hidden">{desc}</p>
      </div>
    </div>
  );
};

export default EachEvent;
