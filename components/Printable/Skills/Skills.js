import React from "react";
import style from "./Skills.module.scss";

function SkillSet(skillGroup) {
    const skillSet = {};
    skillGroup.skills.forEach((skill) => {
        if (!skillSet[skill.label]) {
            skillSet[skill.label] = [];
        }
        skillSet[skill.label].push(skill.title);
    });
    const skillList = Object.keys(skillSet).map((key) => skillSet[key].join(" / "));
    return (
        <div className={style['skill-set']} key={skillGroup.title}>
            <h3>{skillGroup.title}</h3>
            <ul>
                {skillList.map((skills) => <li key={skills}>{skills}</li>)}
            </ul>
        </div>
    )
}

export default function Skills({skills}) {
    return (
        <section className={style.skills}>
            <h1>Skills</h1>
            <div className={style['set-wrapper']}>
                {skills.map((group) => SkillSet(group))}
            </div>
        </section>
    )
}