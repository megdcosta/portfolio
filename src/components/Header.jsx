import React from "react";

function Header() {
  return (
    <header>
      <nav>
        <a href="#about" onClick={(e) => scrollToSection(e, "about")}>About</a>
        <a href="#projects" onClick={(e) => scrollToSection(e, "projects")}>Projects</a>
        <a href="#experience" onClick={(e) => scrollToSection(e, "experience")}>Experience</a>
        <a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>Contact</a>
      </nav>
      <div className="title-container">
        <h1>Megan D Costa</h1>
        <p>Aspiring Software Developer</p>
      </div>
    </header>
  );
}

function scrollToSection(event, id) {
  event.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default Header;
