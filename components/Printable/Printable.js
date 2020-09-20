import me from "../me.yaml"
import React from "react";
import { Profile } from "./Profile";
import { Education } from "./Education";
import { Experiences } from "./Experiences";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

export default function Printable() {
    return <main>
        <Profile profile={me.profile}/>
        <Education educations={me.educations}/>
        <Experiences experiences={me.experiences}/>
        <Projects projects={me.projects}/>
        <Skills skills={me.skills}/>
    </main>
}