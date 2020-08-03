import style from "./skills.module.scss"
import React from "react";

function SkillBar(skillBar) {
    return (
        <div className={style['skill-bar']} key={skillBar.title}>
            <div className={style.wrapper}>
                <span className={style.filled} style={{backgroundColor: skillBar.color, width: skillBar.percentage}} />
            </div>
            <span className={style.percentage}>{skillBar.percentage}</span>
            <span className={style.title}>{skillBar.title}</span>
        </div>
    )
}

function SkillGroup(skillGroup) {
    return (
        <div className={style['skill-group']} key={skillGroup.title}>
            <header className={style.header}>{skillGroup.title}</header>
            <div className={style.body}>
                {
                    skillGroup.skills.map((skill) => {
                        if (skill.color === undefined) {
                            skill.color = skillGroup.color;
                        }
                        return SkillBar(skill)
                    })
                }
            </div>
        </div>
    )
}

function SkillSet(skillGroup) {
    const skillSet = {};
    skillGroup.skills.forEach((skill) => {
        if (!skillSet[skill.label]) {
            skillSet[skill.label] = [];
        }
        skillSet[skill.label].push(skill.title);
    });
    const skillList = Object.keys(skillSet).map((key, index) => skillSet[key].join(" / "));
    return (
        <div className={style['skill-set']} key={skillGroup.title}>
            <h3>{skillGroup.title}</h3>
            <ul>
                {skillList.map((skills) => <li key={skills}>{skills}</li>)}
            </ul>
        </div>
    )
}

export default function Skills() {
    const groups = [
        {
            title: 'Frontend',
            color: 'rgb(228, 182, 97)',
            skills: [
                {title: 'HTML5', percentage: '80%', label: '1'},
                {title: 'CSS3', percentage: '70%', label: '1'},
                {title: 'jQuery', percentage: '75%', label: '1'},
                {title: 'Bootstrap', percentage: '70%', label: '1'},
                {title: 'AngularJS', percentage: '72%', label: '2'},
                {title: 'Angular', percentage: '75%', label: '2'},
                {title: 'React', percentage: '20%', label: '2'},
                {title: 'Vue', percentage: '20%', label: '2'},
            ],
        },
        {
            title: 'Programming Language',
            color: 'rgb(107, 153, 208)',
            skills: [
                {title: 'Go', percentage: '90%', label: '1'},
                {title: 'C', percentage: '90%', label: '1'},
                {title: 'C++', percentage: '85%', label: '1'},
                {title: 'Python', percentage: '65%', label: '2'},
                {title: 'PHP', percentage: '60%', label: '2'},
                {title: 'TypeScript', percentage: '75%', label: '2'},
                {title: 'Ruby', percentage: '35%', label: '3'},
                {title: 'NodeJS', percentage: '35%', label: '3'},
                {title: 'Rust', percentage: '15%', label: '3'},
                {title: 'Java', percentage: '20%', label: '3'},
            ],
        },
        {
            title: 'Backend & Database',
            color: 'rgb(122, 193, 149)',
            skills: [
                {title: 'REST API', percentage: '75%', label: '1'},
                {title: 'Protobuf', percentage: '70%', label: '1'},
                {title: 'MySQL', percentage: '70%', label: '2'},
                {title: 'MongoDB', percentage: '65%', label: '2'},
                {title: 'InfluxDB', percentage: '65%', label: '2'},
                {title: 'Flask', percentage: '70%', label: '3'},
                {title: 'GIN', percentage: '75%', label: '3'},
                {title: 'Codeigniter', percentage: '70%', label: '3'},
            ],
        },
        {
            title: 'DevOps',
            color: 'rgb(222, 132, 130)',
            skills: [
                {title: 'Docker', percentage: '85%', label: '1'},
                {title: 'Kubernetes', percentage: '85%', label: '1'},
                {title: 'AWS', percentage: '30%', label: '2'},
                {title: 'Azure', percentage: '65%', label: '2'},
                {title: 'TravisCI', percentage: '70%', label: '3'},
                {title: 'Github Actions', percentage: '60%', label: '3'},
            ],
        },
        {
            title: 'Networking & Security',
            color: 'rgb(143, 133, 230)',
            skills: [
                {title: 'OpenFlow', percentage: '65%', label: '1'},
                {title: 'OpenStack', percentage: '55%', label: '1'},
                {title: 'Netfilter', percentage: '70%', label: '2'},
                {title: 'DPDK', percentage: '60%', label: '2'},
                {title: 'eBPF', percentage: '40%', label: '2'},
                {title: 'XDP', percentage: '40%', label: '2'},
                {title: 'Netmap', percentage: '50%', label: '2'},
                {title: 'Certified Ethical Hacker', percentage: '100%', label: '3'},
            ],
        },
        {
            title: 'Language',
            color: 'rgb(144, 200, 234)',
            skills: [
                {title: '🇹🇼 Chinese', percentage: '95%', label: '1'},
                {title: '🇹🇼 Taiwanese', percentage: '95%', label: '1'},
                {title: '🇯🇵 Japanese', percentage: '70%', label: '2'},
                {title: '🇺🇸 English', percentage: '70%', label: '3'},
            ],
        },
    ];
    return (
        <section className={style.skills}>
            <h1>Skills</h1>
            {/* no print */}
            <div className={style['group-wrapper']}>
                {groups.map((group) => SkillGroup(group))}
            </div>
            {/* do print */}
            <div className={style['set-wrapper']}>
                {groups.map((group) => SkillSet(group))}
            </div>
        </section>
    )
}