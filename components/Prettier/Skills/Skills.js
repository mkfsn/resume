import style from "./Skills.module.scss"
import React from "react";
import SkillGroup from "./SkillGroup";

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