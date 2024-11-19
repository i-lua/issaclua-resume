import React from 'react';
import Project from './Project';
import apple from '../assets/appleCapture.PNG'
import brainwave from '../assets/brainwaveCapture.PNG'
import ultraverse from '../assets/ultraverseCapture.PNG'
import moviesearch from '../assets/MovieSearchCapture.PNG'
import tesla from '../assets/TeslaCapture.PNG'

const projectsData = [
    {
        title: 'Apple Clone Project',
        tech: 'HTML, CSS, JavaScript, Vue, Vuex',
        description: 'A clone of the Apple website built with modern web technologies.',
        imgSrc: apple,
        githubLink: 'https://github.com/i-lua/apple-clone-project.git',
        liveLink: 'https://appleproject.ilua.tech/'
    },
    {
        title: 'Brainwave Project',
        tech: 'HTML, CSS, JavaScript, Vue, Vuex',
        description: 'A project showcasing innovative web design and functionality.',
        imgSrc: brainwave,
        githubLink: 'https://github.com/i-lua/brainwave-clone-project.git',
        liveLink: 'https://brainwaveproject.ilua.tech/'
    },
    {
        title: 'Ultraverse Project',
        tech: 'HTML, CSS, JavaScript, Vue, Vuex',
        description: 'A project showcasing innovative web design and functionality.',
        imgSrc: ultraverse,
        githubLink: 'https://github.com/i-lua/issac-internship.git',
        liveLink: 'https://ultraverseinternship.ilua.tech/'
    },
    {
        title: 'Movie Search Project',
        tech: 'HTML, CSS, JavaScript, Vue, Vuex',
        description: 'A project showcasing innovative web design and functionality.',
        imgSrc: moviesearch,
        githubLink: 'https://github.com/i-lua/week6-project.git',
        liveLink: 'https://moviesearchproject.ilua.tech/'
    },
    {
        title: 'Tesla Clone Project',
        tech: 'HTML, CSS, JavaScript, Vue, Vuex',
        description: 'A project showcasing innovative web design and functionality.',
        imgSrc: tesla,
        githubLink: 'https://github.com/i-lua/tesla-clone-project.git',
        liveLink: 'https://tesla-clone-project-fc7c7.web.app/'
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
