import Head from 'next/head'
import Profile from '../components/profile'
import Summary from '../components/summary'
import Education from "../components/education";
import Experiences from "../components/experiences";
import Projects from "../components/projects";
import Skills from "../components/skills";

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Pei-Ming Wu</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=1" />
                {/*font*/}
                <link href="https://fonts.googleapis.com/css?family=Noto+Sans" rel="stylesheet" />
            </Head>
            <main>
                <Profile/>
                <Summary/>
                <Education/>
                <Experiences/>
                <Projects/>
                <Skills/>
            </main>
            <script src="https://unpkg.com/ionicons@4.4.2/dist/ionicons.js"></script>
        </div>
    )
}
