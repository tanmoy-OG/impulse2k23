import { useEffect, useState } from "react";
import "./assets/App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Components/hovertree";
import Home from "./Pages/home";

import { Route, Routes } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Routes>
      <Route path="/" Component={Home} />
      {/* <Route path="*" Component={ErrorPage} /> */}
    </Routes>
  );
}

export default App;
