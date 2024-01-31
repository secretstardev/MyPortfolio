import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";

import Home from './pages/Home'
import Skill from './pages/Skillset'
import Project from './pages/Projects'
import Resume from './pages/Resume'
import Contact from './pages/Contact'

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Preloader from "./components/PreLoader"
import ScrollToTop from "./components/ScrollToTop"

import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  const scrollToFunction = (idx) => {
    switch (idx) {
      case 1:
        ref1.current.scrollIntoView({ behavior: "smooth" });
        break;
      case 2:
        ref2.current.scrollIntoView({ behavior: "smooth" });
        break;
      case 3:
        ref3.current.scrollIntoView({ behavior: "smooth" });
        break;
      case 4:
        ref4.current.scrollIntoView({ behavior: "smooth" });
        break;
      case 5:
        ref5.current.scrollIntoView({ behavior: "smooth" });
        break;

      default:
        break;
    }
  }


  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar scrollToFunction={scrollToFunction} />
        <ScrollToTop />
        <div ref={ref1} ></div>
        <Home />
        <div ref={ref2} ></div>
        <Skill />
        <div ref={ref3} ></div>
        <Project />
        <div ref={ref4} ></div>
        <Resume />
        <div ref={ref5} ></div>
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;



// <Routes>
//   <Route path="/" element={<Home />} />
//   <Route path="/skillset" element={<Skill />} />
//   <Route path="/project" element={<Project />} />
//   <Route path="/resume" element={<Resume />} />
//   <Route path="/contact" element={<Contact />} />
//   <Route path="*" element={<Navigate to="/"/>} />
// </Routes>