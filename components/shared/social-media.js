import React from "react";
import IconLink from "./icon-link";

export default function SocialMedia({sns}) {
    return (<>
        {sns.home && <IconLink link={sns.home} name="home" color="rgb(78,165,133)"/>}
        {sns.github && <IconLink link={sns.github} name="logo-github" color="rgb(33,37,40)"/>}
        {sns.twitter && <IconLink link={sns.twitter} name="logo-twitter" color="rgb(43,152,236)"/>}
        {sns.linkedin && <IconLink link={sns.linkedin} name="logo-linkedin" color="rgb(23,104,166)"/>}
    </>)
}