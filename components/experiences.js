import Timeline from "./timeline";
import style from "./experiences.module.scss"
import dateFormatter from "./formatter";

export default function Experiences() {
    const experiences = [
        {
            title: 'Glasnostic, Lead Developer',
            date: {
                from: new Date(2018, 11-1, 1),
                to: new Date(),
            },
            icon: 'https://glasnostic.com/favicon.ico',
            details: [
                'Responsible for the cloud project and production environment',
                'Plan and create integration test cases for microservices',
                'Manage team members, sprint planning, shift rosters, performance appraisals, holiday and sickness etc',
            ],
            color: 'green',
        },
        {
            title: 'Glasnostic, Software Engineer',
            date: {
                from: new Date(2017, 2-1, 1),
                to: new Date(2018, 11-1, 1),
            },
            icon: 'https://glasnostic.com/favicon.ico',
            details: [
                'Developed microservices using Golang',
                'Deployed microservices using Docker / Kubernetes',
                'Developed router using Golang / netmap / DPDK',
                'Developed frontend project using Anguler 1.5/2/4 with TypeScript and SCSS',
            ],
            color: 'green',
        },
        {
            title: 'NCKU EE, Network and System Administrator',
            date: {
                from: new Date(2013, 9-1, 1),
                to: new Date(2015, 6-1, 1),
            },
            icon: 'https://www.ee.ncku.edu.tw/image/nckuee.ico',
            details: [
                'Maintained layer 2/3 switches and servers',
                'Developed web-based network management system using PHP and Apache',
            ],
            color: 'green',
        },
        {
            title: 'NSYSU-CDPA, Network and System Administrator',
            date: {
                from: new Date(2010, 9-1, 1),
                to: new Date(2013, 6-1, 1),
            },
            icon: 'https://scontent.fkhh1-1.fna.fbcdn.net/v/t1.0-9/11232064_885586498187186_2626790383753317843_n.png?_nc_cat=106&_nc_sid=85a577&_nc_ohc=zEkI2EQ0HJMAX-i5tTL&_nc_ht=scontent.fkhh1-1.fna&oh=fbaaf10901ae081009d4901128c6ee8d&oe=5F546C90',
            details: [
                'Reconfigured, upgrade, and replaced layer 2/3 switches',
                'Replaced broken RJ45 sockets',
                'Monitored network traffic by MRTG and Netflow',
                'Maintained web-based network management system',
            ],
            color: 'green',
        },
    ];
    return (
        <section id="experience">
            <h1>Experience</h1>
            <Timeline periods={experiences} color="green"/>
            {experiences.map((experience) => (
                <div className={style.experience} key={experience.title}>
                    <p className={style.title}>{experience.title}</p>
                    <p className={style.date}>{dateFormatter(experience.date.from)} - {dateFormatter(experience.date.to)}</p>
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

