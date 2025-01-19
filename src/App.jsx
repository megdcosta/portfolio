import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
