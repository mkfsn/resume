import React from "react";
import style from "./projects.module.scss";

function Project(project) {
    return (
        <div className={style.project} key={project.title}>
            <div className={style.type}>
                <p>{project.type}</p>
            </div>
            <div className={style.title}>
                <p>{project.title}</p>
            </div>
            <div className={style.details}>
                <ul>
                    {project.details.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default function Projects({projects}) {
    return (
        <section id="projects">
            <h1>Projects</h1>
            {projects.map((project) => Project(project))}
        </section>
    )
}