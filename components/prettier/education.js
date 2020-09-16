import React from "react";
import Timeline from "./timeline";
import style from "./education.module.scss"

export default function Education({educations}) {
    return (
        <section class={style.education} id="education">
            <h1>Education</h1>
            <Timeline periods={educations} color="yellow"/>
        </section>
    )
}