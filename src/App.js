import "./App.css";
import Navbar from "./components/Navbar";
import Contact from "./components/sections/Contact";
import About from "./components/sections/About";
import Home from "./components/sections/Home";
import Projects from "./components/sections/Projects";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
    Aos.refresh();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <div className="app-container">
        <Home title="Home" dark={true} />
        <About title="About" dark={true} />
        <Projects title="Projects" dark={true} />
        <Contact title="Contact" dark={true} />
      </div>
    </div>
  );
}

export default App;
