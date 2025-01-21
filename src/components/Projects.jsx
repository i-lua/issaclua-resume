import React from "react";
import Project from "./Project";
import apple from "../assets/appleCapture.PNG";
import brainwave from "../assets/brainwaveCapture.PNG";
import ultraverse from "../assets/ultraverseCapture.PNG";
import moviesearch from "../assets/MovieSearchCapture.PNG";
import tesla from "../assets/TeslaCapture.PNG";
import ecommerce from "../assets/ecommerce.PNG"

const projectsData = [
  {
    title: "Apple Clone Project",
    tech: "HTML, CSS, Tailwind CSS, JavaScript, React, Next.js, Vue, Vuex",
    description:
      "A clone of the Apple website built with modern web technologies.",
    imgSrc: apple,
    githubLink: "https://github.com/i-lua/apple-clone-project.git",
    liveLink: "https://appleproject.ilua.tech/",
  },
  {
    title: "Brainwave Project",
    tech: "HTML, CSS, Tailwind CSS, JavaScript, React, Next.js, Vue, Vuex",
    description:
      "A project showcasing innovative web design and functionality.",
    imgSrc: brainwave,
    githubLink: "https://github.com/i-lua/brainwave-clone-project.git",
    liveLink: "https://brainwaveproject.ilua.tech/",
  },
  {
    title: "Ultraverse Project",
    tech: "HTML, CSS, JavaScript, Vue, Vuex",
    description:
      "A project showcasing innovative web design and functionality. Implemented multiple APIs to fetch the necessary information needed with a responsive slider as well.",
    imgSrc: ultraverse,
    githubLink: "https://github.com/i-lua/issac-internship.git",
    liveLink: "https://ultraverseinternship.ilua.tech/",
  },
  {
    title: "Movie Search Project",
    tech: "HTML, CSS, JavaScript, React, Vue, Vuex",
    description:
      "A project showcasing innovative web design and functionality. Created a movie search website with a functioning search bar getting the movie information by implementing an API to fetch the information.",
    imgSrc: moviesearch,
    githubLink: "https://github.com/i-lua/week6-project.git",
    liveLink: "https://moviesearchproject.ilua.tech/",
  },
  {
    title: "Ecommerce Library Project",
    tech: "HTML, CSS, JavaScript, React",
    description:
      "A project showcasing ecommerce library.",
    imgSrc: ecommerce,
    githubLink: "https://github.com/i-lua/week5-E-CommerceWithReact.git",
    liveLink: "https://week5-e-commerce-with-react.vercel.app/",
  },
  {
    title: "Tesla Clone Project",
    tech: "HTML, CSS, JavaScript, React, Firebase, Vue, Vuex",
    description:
      "A project showcasing innovative web design and functionality. Created a replica of Tesla page with a functioning sign up process and login account access with the account home page.",
    imgSrc: tesla,
    githubLink: "https://github.com/i-lua/tesla-clone-project.git",
    liveLink: "https://teslaproject.ilua.tech/",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <h1 className="section__title">
            Here are some of my <span className="blue">projects</span>
          </h1>
          <ul className="project__list">
            {projectsData.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
