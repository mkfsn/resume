import style from "./profile.module.scss"

function IconLink(prop) {
    return (
        <a className={style.link} target="_blank" href={prop.link} key={prop.link}>
            <ion-icon name={prop.name} style={{color: prop.color}}/>
        </a>
    )
}

export default function Profile() {
    const me = {
        name: 'Pei-Ming Wu',
        nickname: 'mkfsn',
        location: 'Taiwan',
        email: 'p408865(#)gmail.com',
        avatar: '/resume/avatar.png',
        sns: {
            home: 'https://mkfsn.github.io',
            github: 'https://github.com/mkfsn',
            twitter: 'https://twitter.com/mkfsn',
            linkedin: 'https://linedin.com',
        },
        summary: 'Quick-learning software engineer with experience in computer science, programming and networking for various projects.',
    };
    return (
        <header id="me">
            <div>
                <h1 className={style.name}>
                    <span>{me.name}</span>
                    &nbsp;
                    {me.nickname !== '' && (
                        <span className={style.aka}>(aka {me.nickname})</span>
                    )}
                </h1>
                <h4 className={style.address}>{me.location}. {me.email}</h4>
                <h4 className={style.sns}>
                    <IconLink link={me.sns.home} name="home" color="rgb(78,165,133)"/>
                    <IconLink link={me.sns.github} name="logo-github" color="rgb(33,37,40)"/>
                    <IconLink link={me.sns.twitter} name="logo-twitter" color="rgb(43,152,236)"/>
                    <IconLink link={me.sns.linkedin} name="logo-linkedin" color="rgb(23,104,166)"/>
                </h4>
                <div className={style.avatar}>
                    <img src={me.avatar} alt="avatar"/>
                </div>
            </div>
            <section>
                <h1>Summary</h1>
                <p>{me.summary}</p>
            </section>
        </header>
    )
}

