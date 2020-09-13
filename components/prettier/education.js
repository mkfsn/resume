import Timeline from "./timeline";

export default function Education({educations}) {
    return (
        <section id="education">
            <h1>Education</h1>
            <Timeline periods={educations} color="yellow"/>
        </section>
    )
}