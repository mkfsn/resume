import React from "react"
import style from "./theme-selector.module.scss"
import Icon from "./icon"

export default function ThemeSelector() {
    const isProd = process.env.NODE_ENV === "production"
    const assetPrefix = isProd ? '/resume' : ''
    return (
        <div className={style.dropdown}>
            <button className={style["dropdown-btn"]}>
                Theme &nbsp;
                <Icon name="arrow-dropdown-circle"/>
            </button>
            <div className={style["dropdown-content"]}>
                <a href={assetPrefix + "/?theme=printable"}>Printable</a>
                <a href={assetPrefix + "/"}>Prettier</a>
            </div>
        </div>
    )
}