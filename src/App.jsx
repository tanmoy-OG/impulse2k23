import { useEffect, useState } from "react";
import "./assets/App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "../test/hovertree";
import Home from "./Pages/home";

import { Route, Routes } from "react-router-dom";

function App() {

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
