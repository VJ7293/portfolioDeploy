import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/experience";
import Contacts from "./components/contacts";
import SocialLinks from "./components/SocialLinks";
// import ScrollToTop from "react-scroll-to-top";
const App = (porps) => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <SocialLinks />
      <Contacts />

      <div className="flex justify-end bg-slate-600 scale-105 hover:fill-cyan-500 animate-bounce">
        {/* <ScrollToTop className="flex bg-sky-500 hover:fill-cyan-500" /> */}
      </div>
    </div>
  );
};
export default App;
