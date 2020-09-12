import style from "./icon-link.module.scss";
import React from "react";

export default function IconLink(prop) {
    return (
        <a className={style.link} target="_blank" href={prop.link} key={prop.link}>
            <ion-icon name={prop.name} style={{color: prop.color}}/>
        </a>
    )
}