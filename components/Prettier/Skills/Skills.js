import style from "./Skills.module.scss"
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
            <h3 className={style.header}>{skillGroup.title}</h3>
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

export default function Skills({skills}) {
    return (
        <section className={style.skills}>
            <h1>Skills</h1>
            <div className={style['group-wrapper']}>
                {skills.map((group) => SkillGroup(group))}
            </div>
        </section>
    )
}