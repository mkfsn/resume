import React from "react";
import Head from 'next/head'
import style from './index.module.scss';
import { useRouter } from 'next/router'
import { Prettier } from "../components/Prettier"
import { Printable } from "../components/Printable";
import { ThemeSelector } from "../components/ThemeSelector";

export default function Home() {
    const router = useRouter()
    const { theme } = router.query;
    let component = loadComponent(theme);
    return (
        <div className={style.home}>
            <Head>
                <title>Pei-Ming Wu</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=1" />
                {/*font*/}
                <link href="https://fonts.googleapis.com/css?family=Noto+Sans" rel="stylesheet" />
            </Head>
            <div className={style["theme-selector"]}>
                <ThemeSelector/>
            </div>
            {component}
            <script src="https://unpkg.com/ionicons@4.4.2/dist/ionicons.js"/>
        </div>
    )
}

function loadComponent(theme) {
    switch (theme) {
    case "printable":
        return <Printable/>
    }
    return <Prettier/>
}
