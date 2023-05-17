import impulseLogo from "./assets/Impulse2k23 Logo.png";
import { Timer } from "./Timer";

export const Present = ({ duration }) => {
  return (
    <div className="relative flex flex-col space-y-5 mt-10 mb-5">
      <h1 className="text-5xl font-semibold tracking-wide text-pink-800">
        BENGAL INSTITUTE OF TECHNOLOGY
      </h1>
      <h1 className="text-4xl text-sky-600">PRESENTS</h1>
      <div className="flex justify-center">
        <img src={impulseLogo} alt="Impulse2k23 Logo" className="w-1/4" />
      </div>
      <Timer duration={duration} />
      {/* <div className="relative"><div className="absolute bg-red-600">s</div></div> */}
      <h1 className="pb-10 textBG text-9xl font-bold tracking-widest text-transparent bg-clip-text">
        ALIFEROUS
      </h1>
      <div className="h-36 pb-20 flex flex-col justify-center">
        <div className="wing m-48 text-blue-900 flex justify-center text-7xl font-bold tracking-widest duration-700 hover:scale-110">
          <h1>UNLEASH</h1>
          <h1>YOUR</h1>
          <h1>WINGS</h1>
        </div>
      </div>
    </div>
  );
};
