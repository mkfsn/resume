import React from "react"
import style from "./theme-selector.module.scss"
import Icon from "./icon"

export default function ThemeSelector() {
    return (
        <div className={style.dropdown}>
            <button className={style["dropdown-btn"]}>
                Theme &nbsp;
                <Icon name="arrow-dropdown-circle"/>
            </button>
            <div className={style["dropdown-content"]}>
                <a href="/?theme=printable">Printable</a>
                <a href="/">Prettier</a>
            </div>
        </div>
    )
}