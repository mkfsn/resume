import style from "./projects.module.scss"

function Project(project) {
    return (
        <div className={style.project} key={project.title}>
            <div className={style.type}>
                <p>{project.type}</p>
            </div>
            <div className={style.title}>
                <h4>{project.title}</h4>
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

export default function Projects() {
    const projects = [
        {
            type: 'Master Thesis',
            title: 'Design and Implementation of a Network Traffic Classification Caching Mechanism Based on Net-DPIS',
            details: [
                'Improved performance of a host-based DPIS (Deep Packet Inspection System) which was developed as Linux kernel module.',
            ],
        },
    ];
    return (
        <section id="projects">
            <h1>Projects</h1>
            {projects.map((project) => Project(project))}
        </section>
    )
}

