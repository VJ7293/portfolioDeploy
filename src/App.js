import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/experience";
import Contacts from "./components/contacts";
import SocialLinks from "./components/SocialLinks";
import Google from "./components/Google";
const App = (porps) => {
  return (
    <div>
      <div>
        <NavBar />
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <SocialLinks />
        <Contacts />
      </div>
    </div>
  );
};
export default App;
