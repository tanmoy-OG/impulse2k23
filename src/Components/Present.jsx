import Timer from "./Timer";

const Present = ({ duration }) => {
  return (
    <div className="flex flex-col space-y-5 h-screen pt-4">
      <h1 className="text-5xl font-semibold tracking-wide text-pink-600">
        BENGAL INSTITUTE OF TECHNOLOGY
      </h1>
      <h1 className="text-4xl text-sky-600">PRESENTS</h1>
      <div className="flex justify-center">
        <img src="logo.png" alt="Impulse2k23 Logo" className="w-1/5" />
      </div>
      <Timer duration={duration} />
      {/* <div className="relative"><div className="absolute bg-red-600">s</div></div> */}
    </div>
  );
};

export default Present;