import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Home></Home>
      <Projects></Projects>
      <Education></Education>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;