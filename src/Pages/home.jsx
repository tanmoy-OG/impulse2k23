import object from "../Components";
import "../Components/hovertree";

const Home = () => {
  const time = () => {
    var date = new Date().getDate();
    var remainingDay = (18 - date) * 24 * 60 * 60 * 1000;
    var hours = new Date().getHours();
    var remainingHrsToday = 24 - hours - 1;
    var remainingHrsEventDay = 12;
    var remainingTotalHrs =
      (remainingHrsEventDay + remainingHrsToday) * 60 * 60 * 1000;
    var min = new Date().getMinutes();
    var remainingMinToday = (60 - min) * 60 * 1000;
    var sec = new Date().getSeconds();
    var remainingSecToday = (60 - sec) * 1000;
    var totalRemainingTime =
      remainingDay + remainingTotalHrs + remainingMinToday + remainingSecToday;
    return totalRemainingTime > 0 ? totalRemainingTime : 0;
  };
  return (
    <div className="absolute top-0 left-0 w-full h-fit text-violet-200 select-none">
      <object.Nav />
      <object.Present duration={time()} />
      <object.Aliferous />
      <div className="backdrop-blur-sm">
        <object.About />
        <object.Events />
        <object.Members />
        <object.Sponsors />
        <object.Footer />
      </div>
      {/* <canvas
        className="fixed left-0 top-0 w-full h-screen -z-10"
        id="canvas"
      ></canvas> */}
    </div>
  );
};

export default Home;
