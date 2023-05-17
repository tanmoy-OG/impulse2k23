export const Nav = () => {
  return (
    <div className="flex justify-between text-violet-300 pt-5">
      {/* <div className="absolute h-screen top-0 z-10 bg-black">
        <h1>s</h1>
      </div> */}
      <h1 className="basis-1/4">IMPULSE 2K23</h1>
      <div className="flex justify-around basis-1/2">
        <h1 className="navBG">HOME</h1>
        <h1>
          <a href="#about">ABOUT</a>
        </h1>
        <h1>EVENTS</h1>
        <h1>MEMBERS</h1>
        <h1>SPONSORS</h1>
        <h1>CONTACT US</h1>
      </div>
    </div>
  );
};
