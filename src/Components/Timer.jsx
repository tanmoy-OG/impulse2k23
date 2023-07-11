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
      <div
        className="flex justify-center 2xl:justify-evenly xl:gap-4"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-easing="ease-in-out"
      >
        <div className="basis-36">
          <p className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl">
            {days > 0 ? days : 0}
          </p>
          <span className="text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl">
            DAYS
          </span>
        </div>
        <div className="basis-36">
          <p className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl">
            {hours > 0 ? hours : 0}
          </p>
          <span className="text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl">
            HOURS
          </span>
        </div>
        <div className="basis-36">
          <p className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl">
            {minutes > 0 ? minutes : 0}
          </p>
          <span className="text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl">
            MINUTES
          </span>
        </div>
        <div className="basis-36">
          <p className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl">
            {seconds > 0 ? seconds : 0}
          </p>
          <span className="text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl">
            SECONDS
          </span>
        </div>
      </div>
    );
  };
  return <div className="">{getTime(time)}</div>;
};

export default Timer;
