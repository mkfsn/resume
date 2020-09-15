import React from "react"
import style from "./projects.module.scss"

function Project(project) {
    return (
        <div className={style.project} key={project.title}>
            <div className={style.header}>
                <h4 className={style.title}>
                    <p>{project.title}</p>
                </h4>
                <h4 className={style.type}>
                    <p>{project.type}</p>
                </h4>
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
        <section className={style.projects} id="projects">
            <h1>Projects</h1>
            {projects.map((project) => Project(project))}
        </section>
    )
}

