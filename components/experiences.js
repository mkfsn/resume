import style from "./experiences.module.scss"

export default function Experiences() {
    const experiences = [
        {
            // https://glasnostic.com/favicon.ico
            title: 'Glasnostic, Lead Developer',
            date: {
                from: 'Nov\'18',
                to: 'Current',
            },
            details: [
                'Responsible for the cloud project and production environment',
                'Plan and create integration test cases for microservices',
                'Manage team members, sprint planning, shift rosters, performance appraisals, holiday and sickness etc',
            ],
        },
        {
            // https://glasnostic.com/favicon.ico
            title: 'Glasnostic, Software Engineer',
            date: {
                from: 'Feb\'17',
                to: 'Nov\'18',
            },
            details: [
                'Developed microservices using Golang',
                'Deployed microservices using Docker / Kubernetes',
                'Developed router using Golang / netmap / DPDK',
                'Developed frontend project using Anguler 1.5/2/4 with TypeScript and SCSS',
            ],
        },
        {
            // https://www.ee.ncku.edu.tw/image/nckuee.ico
            title: 'NCKU EE, Network and System Administrator',
            date: {
                from: 'Sep\'13',
                to: 'Jun\'15',
            },
            details: [
                'Maintained layer 2/3 switches and servers',
                'Developed web-based network management system using PHP and Apache',
            ],
        },
        {
            title: 'NSYSU-CDPA, Network and System Administrator',
            date: {
                from: 'Sep\'10',
                to: 'Jun\'13',
            },
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

            <div className={style.timeline}>
                {experiences.map((experience) => (
                    <div className={style['timeline-container']}>
                        <div className={style['timeline-outline']}>
                            <div className={style.end}>{experience.date.to}</div>
                            <div className={style.begin}>{experience.date.from}</div>
                        </div>
                        <div className={style['timeline-content']}>
                            <div className={style.title}>
                                <h3>{experience.title}</h3>
                            </div>
                            <div className={style.detail}>
                                <ul>
                                    {experience.details.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {experiences.map((experience) => (
                <div className={style.experience} key={experience.title}>
                    <p className={style.title}>{experience.title}</p>
                    <p className={style.date}>{experience.date.from} - {experience.date.to}</p>
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

