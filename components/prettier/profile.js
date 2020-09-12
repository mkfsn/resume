import React from "react";
import { i18n, withTranslation } from '../../i18n'
import style from "./profile.module.scss"
import IconLink from "../shared/icon-link";
import Icon from "../shared/icon";

const Profile = ({profile, t}) => {
    return (
        <header className={style.profile}>
            <div className={style.container}>
                <h1 className={style.name}>
                    <span>{profile.name}</span>
                    &nbsp;
                    {profile.nickname !== '' && (
                        <span className={style.aka}>(aka {profile.nickname})</span>
                    )}
                </h1>
                <h4 className={style.address}>
                </h4>
                <h4 className={style.sns}>
                    <IconLink link={profile.sns.home} name="home" color="rgb(78,165,133)"/>
                    <IconLink link={profile.sns.github} name="logo-github" color="rgb(33,37,40)"/>
                    <IconLink link={profile.sns.twitter} name="logo-twitter" color="rgb(43,152,236)"/>
                    <IconLink link={profile.sns.linkedin} name="logo-linkedin" color="rgb(23,104,166)"/>
                    <span className={style.location}>
                        <Icon name="pin"/>
                        {profile.location} &nbsp;
                    </span>
                    <span className={style.email}>
                        <Icon name="mail"/> &nbsp;
                        {profile.email}
                    </span>
                </h4>
                <div className={style.avatar}>
                    <img src={profile.avatar} alt="avatar"/>
                </div>
                <hr/>
                <p onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'ja' : 'en')}>{t(profile.summary)}</p>
            </div>
        </header>
    )
}

export default withTranslation('common')(Profile)
