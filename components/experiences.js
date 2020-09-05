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
                'Responsible for the cloud project (i.e., developing, reviewing, testing and QA front-end/back-end web services, managing staging and production environments).',
                'Experience in engineering leadership (i.e., team member management, sprint planning, shift rosters, performance appraisals).',
                'Experience in testing micro-services (i.e., planing test cases for unit test and integration test, developing integration test for micro-services).',
                'Experience with AWS (i.e., EC2, VPS).',
                'Experience with Azure (i.e., ACS, AKS, OMS, Service Bus, CosmosDB).',
                'Experience with several Kubernetes CNIs (e.g., flannel, calico, weave, canal).',
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
                'Experience deploying and administering micro-services using Docker and Kubernetes.',
                'Experience administering and deploying development CI/CD tools such as Git, Github, TravisCI.',
                'Experience developing software router in Go and C with userspace packet processing frameworks (e.g., DPDK, Netmap).',
                'Experience in back-end web development in Go with several technologies (e.g., MongoDB, InfluxDB, RESTful, Websocket, gRPC, LDAP).',
                'Experience in front-end web development in TypeScript, HTML, SCSS using Anguler 1.5/2/4, D3.js, RxJS.',
                'Experience with Linux operating system environments (e.g., Ubuntu, CentOS, Alpine).',
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
                'Experience maintaining layer 2/3 switches and Linux operating systems.',
                'Experience with Linux operating system environments (e.g., Ubuntu, CentOS).',
                'Experience developing web-based network management system in PHP, HTML, JavaScript with LAMP.',
            ],
            color: 'green',
        },
        {
            title: 'NSYSU-CDPA (Campus Dorm-net Promotion Association), Network and System Administrator',
            date: {
                from: new Date(2010, 9-1, 1),
                to: new Date(2013, 6-1, 1),
            },
            icon: 'https://scontent.fkhh1-1.fna.fbcdn.net/v/t1.0-9/11232064_885586498187186_2626790383753317843_n.png?_nc_cat=106&_nc_sid=85a577&_nc_ohc=zEkI2EQ0HJMAX-i5tTL&_nc_ht=scontent.fkhh1-1.fna&oh=fbaaf10901ae081009d4901128c6ee8d&oe=5F546C90',
            details: [
                'Experience with management of layer 2/3 switches (i.e., reconfiguration, replacement, upgrade).',
                'Experience with RJ45 sockets replacement.',
                'Experience in network monitoring using several tools and technologies (e.g., SNMP, MRTG, Netflow).',
                'Experience maintaining web-based network management system.',
                'Experience with Unix-like operating system environments (e.g., Ubuntu, Gentoo, FreeBSD, Solaris).',
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

