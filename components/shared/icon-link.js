import React from "react"
import style from "./icon-link.module.scss"
import Icon from "./icon"

export default function IconLink(prop) {
    return (
        <a className={style.link} target="_blank" href={prop.link} key={prop.link}>
            <Icon name={prop.name} color={prop.color}/>
        </a>
    )
}