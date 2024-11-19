import React from 'react';
import '../App.css'

const Project = ({ title, tech, description, imgSrc, githubLink, liveLink }) => {
    return (
        <li className="projects">
            <div className="project__wrapper">
                <img src={imgSrc} className="project__img" alt={`${title} screenshot`} />
                <div className="project__wrapper--bg"></div>
                <div className="project__description">
                    <h3 className="project__description--title">{title}</h3>
                    <h4 className="project__description--sub-title">{tech}</h4>
                    <p className="project__description--para">{description}</p>
                    <div className="project__description--links">
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project__description--link"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                        <a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project__description--link"
                        >
                            <i className="fas fa-link"></i>
                        </a>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Project;
