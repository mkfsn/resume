import style from "./SkillBar.module.scss";
import React from "react";

export default function SkillBar(skillBar) {
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