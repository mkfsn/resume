import style from "./experiences.module.css"

export default function Experiences() {
    const experiences = [
        {
            title: 'Glasnostic, Lead Developer',
            date: 'Nov\'18 - Current',
            details: [
                'Responsible for the cloud project and production environment',
                'Plan and create integration test cases for microservices',
                'Manage team members, sprint planning, shift rosters, performance appraisals, holiday and sickness etc',
            ],
        },
        {
            title: 'Glasnostic, Software Engineer',
            date: 'Feb\'17 - Nov\'18',
            details: [
                'Developed microservices using Golang',
                'Deployed microservices using Docker / Kubernetes',
                'Developed router using Golang / netmap / DPDK',
                'Developed frontend project using Anguler 1.5/2/4 with TypeScript and SCSS',
            ],
        },
        {
            title: 'NCKU EE, Network and System Administrator',
            date: 'Sep\'13 - Jun,15',
            details: [
                'Maintained layer 2/3 switches and servers',
                'Developed web-based network management system using PHP and Apache',
            ],
        },
        {
            title: 'NSYSU-CDPA, Network and System Administrator',
            date: 'Sep\'10 - Jun,13',
            details: [
                'Reconfigured, upgrade, and replaced layer 2/3 switches',
                'Replaced broken RJ45 sockets',
                'Monitored network traffic by MRTG and Netflow',
                'Maintained web-based network management system',
            ],
        },
    ];
    return (
        <section id="experience">
            <h1>Experience</h1>
            {experiences.map((experience) => (
                <div className={style.experience} key={experience.title}>
                    <p className={style.title}>{experience.title}</p>
                    <p className={style.date}>{experience.date}</p>
                    <ul className={style.details}>
                        {experience.details.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    )
}

