import React from "react";
import { i18n, withTranslation } from '../../i18n'
import style from "./profile.module.scss"
import IconLink from "../shared/icon-link";
import Icon from "../shared/icon";
import SocialMedia from "../shared/social-media";

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
                    {profile.sns && <SocialMedia sns={profile.sns}/>}
                    <span className={style.location}>
                        <Icon name="pin"/>
                        {profile.location}
                    </span>
                    &nbsp;
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
