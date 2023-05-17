import { useEffect, useState } from "react";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Nav } from "./Nav";
import { Present } from "./Present";
import { About } from "./About";
import { Events } from "./Events";
import { Members } from "./Members";
import { TechTeam } from "./TechTeam";
import { Sponsors } from "./Sponsors";
import { Contact } from "./Contact";

function App() {
  // const [count, setCount] = useState(0);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <Nav />
      <Present duration = {5*24*60*60*1000} />
      <About />
      <Events />
      <Members />
      <TechTeam />
      <Sponsors />
      <Contact />
    </div>
  );
}

export default App;
