import React from "react";
import style from "./projects.module.scss";

function Project(project) {
    return (
        <div className={style.project} key={project.title}>
            <p className={style.type}><i>{project.type}</i></p>
            <h3 className={style.title}>{project.title}</h3>
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
        <section className={style.projects} id="projects">
            <h1>Projects</h1>
            {projects.map((project) => Project(project))}
        </section>
    )
}