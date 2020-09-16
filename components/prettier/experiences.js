import React from "react"
import Timeline from "./timeline"
import style from "./experiences.module.scss"

export default function Experiences({experiences}) {
    return (
        <section className={style.experiences} id="experience">
            <h1>Experience</h1>
            <Timeline periods={experiences} color="green"/>
        </section>
    )
}

