import React from "react";
import style from "./education.module.scss";
import dateFormatter from "../shared/formatter";

export default function Education({educations}) {
    return (<section id="education">
        <h1>Education</h1>
        {educations.map((education) => (
            <div className={style.education} key={education.title}>
                <p className={style.name}>{education.title}</p>
                <p className={style.date}>{dateFormatter(education.date.from)} - {dateFormatter(education.date.to)}</p>
                <p className={style.degree}>{education.details}</p>
            </div>
        ))}
    </section>)
}
