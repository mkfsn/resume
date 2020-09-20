import React from "react";
import { Timeline } from "../Timeline";
import style from "./Education.module.scss"

export default function Education({educations}) {
    return (
        <section className={style.education} id="education">
            <h1>Education</h1>
            <Timeline periods={educations} color="yellow"/>
        </section>
    )
}