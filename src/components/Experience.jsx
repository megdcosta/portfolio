import React from "react";

function Experience() {
  const experiences = [
    {
      title: "Quality Assurance Co-op",
      company: "Camis Inc",
      location: "Guelph, ON",
      date: "Sept 2024 - Dec 2024",
      points: [
        "Designed and implemented detailed test plans, scenarios, and scripts to meet strict deadlines and ensure seamless product quality.",
        "Streamlined data analytics by migrating reporting capabilities from Tableau to Power BI.",
        "Collaborated with cross-functional teams to address and resolve client-reported feedback."
      ]
    },
    {
      title: "Cyber Security Risk Advisory Intern",
      company: "Deloitte",
      location: "Kuwait City, Kuwait",
      date: "May 2024 - Aug 2024",
      points: [
        "Conducted a comprehensive ISO 27001 audit for STC, identifying critical security vulnerabilities and delivering strategic recommendations.",
        "Developed and presented a detailed proposal for Kuwait International Bank (KIB), outlining penetration testing services.",
        "Executed a thorough ICS-OT Maturity Assessment for Kuwait Oil Company (KOC), driving improvements in their cybersecurity framework."
      ]
    }
  ];

  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="experience-container">
        {experiences.map((job, index) => (
          <div key={index} className="experience-card">
            <div className="title-company">
              <h3>{job.title}</h3>
              <h4>{job.company}</h4>
            </div>
            <div className="date-location">
              <p>{job.location}</p>
              <p>{job.date}</p>
            </div>
            <ul>
              {job.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
