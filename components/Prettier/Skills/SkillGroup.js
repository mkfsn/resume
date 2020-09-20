import style from "./SkillGroup.module.scss";
import SkillBar from "./SkillBar";
import React from "react";

export default function SkillGroup(skillGroup) {
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