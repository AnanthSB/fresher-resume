import React, { useState } from "react";
import "./App.css";
import ResumeFormat from "components/ResumeFormat/ResumeFormat";

export default function App() {
  const [keySkills, setKeySkills] = useState([
    "Javascript",
    "React Hooks",
    "React-JS",
    "MongoDB",
    "HTML",
    "Bootstrap",
    "CSS",
    "Node-JS",
  ]);
  const [education, setEducation] = useState([
    {
      degree: "BCA (Computer Science)",
      university: "GUG",
      passOutYear: "May - 2021",
    },
  ]);
  const [projects, setProjects] = useState([
    {
      name: "Weather App",
      points: [
        "Built by using React-js Framework, Bootstrap, FontAwesome and REST API.",
        "Serves live Weather data from Weather REST API (provider: weatherstack).",
        "A Complete responsive web app works on desktop, mobile, tab,etc.",
      ],
    },
    {
      name: "NewsTime",
      points: [
        "Built by using React-js Framework, Bootstrap, FontAwesome & REST API.",
        "Serves latest News from news REST API (provider: newsapi).",
        "A Complete responsive web app works on desktop, mobile, tab,etc.",
      ],
    },
    {
      name: "Portfolio",
      points: [
        "Built online portfolio for self by using React-JS framework.",
        "Tech Stack: React-JS,Bootstrap, Godady's domain and hosting Platform.",
        "A Complete responsive web app works on desktop, mobile, tab,etc.",
        "Portfolio link:- https://ananthshetty.in",
      ],
    },
  ]);

  return (
    <div className="flex items-center justify-center w-full">
      <ResumeFormat
        showButton={false}
        keySkills={keySkills}
        education={education}
        projects={projects}
      />
    </div>
  );
}
