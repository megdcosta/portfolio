import React from "react";

function Projects() {
  const projectDetails = [
    {
      name: "Stopwatch",
      url: "https://stopwatch-project-ashy.vercel.app",
      tech: "React",
      points: [
        "Developed a stopwatch application using React, showcasing start, pause, and reset functionalities with a clean user interface.",
        "Implemented state management with useState to handle dynamic timer updates and user interactions.",
        "Utilized the useEffect hook to manage side effects for real-time timer functionality.",
        "Designed a modular and reusable component structure, following React best practices.",
        "Enhanced debugging and maintainability through React DevTools."
      ]
    },
    {
      name: "Weather Forecast Web Application",
      url: "https://github.com/megdcosta/Weather-App",
      tech: "HTML, CSS, JavaScript",
      points: [
        "Designed a responsive weather app leveraging the WeatherAPI for real-time data.",
        "Enhanced user experience with dynamic updates and intuitive error handling.",
        "Integrated third-party APIs for data retrieval and ensured accessibility compliance."
      ]
    },
    {
      name: "Pool Game Simulator",
      url: "https://github.com/megdcosta/pool-game-simulator",
      tech: "C, Python, HTML, CSS, JavaScript, SQL",
      points: [
        "Developed a dynamic full-stack web application, enhanced by advanced physics algorithms and realistic graphics.",
        "Implemented SQLite for complex database management and merged a C-based Array and Matrix library.",
        "Demonstrated a strategic integration of diverse technologies to optimize both performance and user engagement."
      ]
    },
    {
      name: "Mancala Game",
      url: "https://github.com/megdcosta/mancala-game",
      tech: "Java",
      points: [
        "Designed and implemented a command-line Mancala game using Object-Oriented Design principles.",
        "Developed and executed detailed JUnit tests to validate game logic and improve error handling.",
        "Integrated advanced game state management and debugging tools to ensure smooth and error-free gameplay."
      ]
    },
    {
      name: "Infant Names Comparative Study",
      url: "https://github.com/megdcosta/baby-names-comparative-study",
      tech: "Python",
      points: [
        "Managed and analyzed over 1.1 million regionally diverse datasets using object-oriented database management.",
        "Utilized Pandas, NumPy, and Matplotlib for data analysis and visualization.",
        "Derived insights that informed regional naming trends and patterns."
      ]
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projectDetails.map((project, index) => (
          <div key={index} className="project-card">
            <h3>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
            </h3>
            <p>{project.tech}</p>
            <ul>
              {project.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
