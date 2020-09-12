import Timeline from "./timeline";

export default function Experiences({experiences}) {
    return (
        <section id="experience">
            <h1>Experience</h1>
            <Timeline periods={experiences} color="green"/>
        </section>
    )
}

