import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;

    // ✅ EDUCATION (FIXED)
    const education = this.props.data.education.map((education) => {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    // ✅ WORK (BUTTON ADDED HERE CORRECTLY)
    const work = this.props.data.work.map((work) => {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p style={{ fontStyle: "italic" }}>{work.tech}</p>
          <p>{work.description}</p>

          {/* ✅ BUTTON ONLY FOR SELF-EMPLOYED */}
          {work.company === "Self-Employed / Independent Projects" && (
            <a
              href="https://docs.google.com/document/d/1am9GqSEK3X0OBw1f2mMYDhACxuxIkvsqdga3qfwS--Y/edit?tab=t.0"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginBottom: "10px",
                padding: "10px 20px",
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                color: "#fff",
                borderRadius: "6px",
                cursor:"pointer",
                textDecoration: "none",
                fontSize: "14px",
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.target.style.opacity = "0.8")}
              onMouseOut={(e) => (e.target.style.opacity = "1")}
            >
              🔗 View Work
            </a>
          )}
        </div>
      );
    });

    // ✅ SKILLS
    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
          <span
            style={{
              fontSize: "10px",
              fontStyle: "italic",
              marginLeft: "6px",
              color: "#fff",
            }}
          >
            ({skills.years})
          </span>
        </li>
      );
    });

    return (
      <section id="resume">
        {/* EDUCATION */}
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        {/* WORK */}
        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>

        {/* SKILLS */}
        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{skillmessage}</p>

              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;