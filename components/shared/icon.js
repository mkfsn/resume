import React from "react";
import style from "./icon.module.scss"

export default function Icon(props) {
    return (
        <span className={style.icon}>
            <ion-icon className={style.icon} name={props.name} style={{color: props.color}}/>
        </span>
    )
}