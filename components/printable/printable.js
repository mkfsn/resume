import me from "../me.yaml"
import React from "react";
import Profile from "./profile";
import Education from "./education";
import Experiences from "./experiences";
import Projects from "./projects";
import Skills from "./skills";

export default function Printable() {
    return <main>
        <Profile profile={me.profile}/>
        <Education educations={me.educations}/>
        <Experiences experiences={me.experiences}/>
        <Projects projects={me.projects}/>
        <Skills skills={me.skills}/>
    </main>
}