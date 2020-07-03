import style from "./projects.module.css"

function Project(project) {
    return (
        <div className={style.project}>
            <p className={style.type}>{project.type}</p>
            <p className={style.title}>{project.title}</p>
            <ul className={style.details}>
                <li>{project.details}</li>
            </ul>
        </div>
    )
}

export default function Projects() {
    const projects = [
        {
            type: 'Master Thesis',
            title: 'Design and Implementation of a Network Traffic Classification Caching Mechanism Based on Net-DPIS',
            details: 'Improved performance of a kernel-based Deep Packet Inspection System',
        },
    ];
    return (
        <section id="projects">
            <h1>Projects</h1>
            {projects.map((project) => Project(project))}
        </section>
    )
}

