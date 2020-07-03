import style from "./skills.module.css"

export default function Skills() {
    const skills = {
        knowledge: [
            'Golang / C / C++',
            'Docker / Kubernetes',
            'Linux Kernel / Linux Networking / netmap / DPDK / eBPF / XDP',
            'REST / gRPC',
            'HTML5/ CSS3 / AngularJS / Angular / TypeScript / jQuery / Bootstrap',
            'Python / PHP / Ruby / NodeJS',
            'MySQL / MongoDB / InfluxDB',
            'Flask / GIN / Codeigniter',
            'Azure: ACS / AKS / OMS',
            'Certified Ethical Hacker',
        ],
        languages: [
            '🇹🇼 Chinese - Native speaker',
            '🇯🇵 Japanese - Advanced - N1',
            '🇺🇸 English - Advanced',
        ],
    };
    return (
        <section className={style.skills}>
            <h1>Skills</h1>
            <h3>Knowledge</h3>
            <ul>
                {skills.knowledge.map((knowledge) => (
                    <li>{knowledge}</li>
                ))}
            </ul>
            <h3>Languages</h3>
            <ul>
                {skills.languages.map((language) => (
                    <li>{language}</li>
                ))}
            </ul>
        </section>
    )
}