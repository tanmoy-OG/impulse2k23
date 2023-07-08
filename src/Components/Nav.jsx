const Nav = () => {
  return (
    <div
      className="sticky z-10 flex justify-between text-violet-300 tracking-wider backdrop-blur-md pt-5 pb-5 transition-all duration-500"
      id="navbar"
    >
      {/* <div className="absolute h-screen top-0 z-10 bg-black">
        <h1>s</h1>
      </div> */}
      <div className="flex justify-center basis-1/4">
        <a
          href="#"
          className="text-xl transition-all duration-200 hover:text-yellow-200"
          id="impulse"
        >
          IMPULSE 2K23
        </a>
      </div>
      <div className="flex justify-around basis-1/2">
        <a
          href="#about"
          className="transition-all duration-200 hover:text-yellow-200"
        >
          ABOUT
        </a>
        <a
          href="#"
          className="transition-all duration-200 hover:text-yellow-200"
        >
          EVENTS
        </a>
        <a
          href="#"
          className="transition-all duration-200 hover:text-yellow-200"
        >
          MEMBERS
        </a>
        <a
          href="#"
          className="transition-all duration-200 hover:text-yellow-200"
        >
          SPONSORS
        </a>
        <a
          href="#footer"
          className="transition-all duration-200 hover:text-yellow-200"
        >
          CONTACT US
        </a>
      </div>
    </div>
  );
};

export default Nav;
