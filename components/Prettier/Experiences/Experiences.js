import React from "react"
import { Timeline } from "../Timeline"
import style from "./Experiences.module.scss"

export default function Experiences({experiences}) {
    return (
        <section className={style.experiences} id="experience">
            <h1>Experience</h1>
            <Timeline periods={experiences} color="green"/>
        </section>
    )
}

