import React from "react";
import style from "./Experiences.module.scss";
import dateFormatter from "../../shared/formatter";

export default function Experiences({experiences}) {
    return (
        <section className={style.experiences} id="experiences">
            <h1>Experience</h1>
            {experiences.map((experience) => (
                <div className={style.experience} key={experience.organization + '-' + experience.title}>
                    <h3 className={style.title}>
                        {experience.organization}, {experience.title}
                    </h3>
                    <p className={style.date}>
                        <i>{dateFormatter(experience.date.from)} - {dateFormatter(experience.date.to)}</i>
                    </p>
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