import { useEffect, useState } from "react";

const Timer = ({ duration }) => {
  const [time, setTime] = useState(duration);
  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);
  const getTime = (milli) => {
    let totalSeconds = parseInt(Math.floor(milli / 1000));
    let totalMinutes = parseInt(Math.floor(totalSeconds / 60));
    let totalHours = parseInt(Math.floor(totalMinutes / 60));
    let days = parseInt(Math.floor(totalHours / 24));
    let seconds = parseInt(totalSeconds % 60);
    let minutes = parseInt(totalMinutes % 60);
    let hours = parseInt(totalHours % 24);
    return (
      <div className="flex justify-center">
        <div className="basis-36">
          <p className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl">
            {days > 0 ? days : 0}
          </p>
          <span className="text-xs sm:text-sm lg:text-base xl:text-md">DAYS</span>
        </div>
        <div className="basis-36">
          <p className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl">
            {hours > 0 ? hours : 0}
          </p>
          <span className="text-xs sm:text-sm lg:text-base xl:text-md">HOURS</span>
        </div>
        <div className="basis-36">
          <p className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl">
            {minutes > 0 ? minutes : 0}
          </p>
          <span className="text-xs sm:text-sm lg:text-base xl:text-md">MINUTES</span>
        </div>
        <div className="basis-36">
          <p className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl">
            {seconds > 0 ? seconds : 0}
          </p>
          <span className="text-xs sm:text-sm lg:text-base xl:text-md">SECONDS</span>
        </div>
      </div>
    );
  };
  return <div className="">{getTime(time)}</div>;
};

export default Timer;
