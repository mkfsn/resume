import style from "./projects.module.scss"

function Project(project, theme) {
    return (
        <div className={style.project + ' ' + style[theme]} key={project.title}>
            <div className={style.type}>
                <p>{project.type}</p>
            </div>
            <div className={style.title}>
                <h3>{project.title}</h3>
            </div>
            <div className={style.details}>
                <ul>
                    <li>{project.details}</li>
                </ul>
            </div>
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
            {projects.map((project) => Project(project, 'chromatic'))}
            {projects.map((project) => Project(project, 'monochromatic'))}
        </section>
    )
}
