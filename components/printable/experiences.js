import React from "react";
import style from "./experiences.module.scss";
import dateFormatter from "../shared/formatter";

export default function Experiences({experiences}) {
    return (
        <section id="experience">
            <h1>Experience</h1>
            {experiences.map((experience) => (
                <div className={style.experience} key={experience.organization + '-' + experience.title}>
                    <p className={style.title}>
                        {experience.organization}, {experience.title}
                    </p>
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