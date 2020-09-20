import React from "react"
import style from "./Projects.module.scss"
import Project from "./Project";

export default function Projects({projects}) {
    return (
        <section className={style.projects} id="projects">
            <h1>Projects</h1>
            {projects.map((project) => Project(project))}
        </section>
    )
}

