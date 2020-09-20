import style from "./Project.module.scss";
import React from "react";

export default function Project(project) {
    return (
        <div className={style.project} key={project.title}>
            <div className={style.header}>
                <h4 className={style.title}>
                    <p>{project.title}</p>
                </h4>
                <h4 className={style.type}>
                    <p>{project.type}</p>
                </h4>
            </div>
            <div className={style.details}>
                <ul>
                    {project.details.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
