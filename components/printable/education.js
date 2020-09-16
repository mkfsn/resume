import React from "react";
import style from "./education.module.scss";
import dateFormatter from "../shared/formatter";

export default function Education({educations}) {
    return (<section className={style["education-container"]} id="education">
        <h1>Education</h1>
        {educations.map((education) => (
            <div className={style.education} key={education.title}>
                <h3 className={style.name}>{education.title}</h3>
                <p className={style.date}>
                    <i>{dateFormatter(education.date.from)} - {dateFormatter(education.date.to)}</i>
                </p>
                <p className={style.degree}>{education.details}</p>
            </div>
        ))}
    </section>)
}
