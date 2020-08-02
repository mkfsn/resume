import style from "./profile.module.scss"

export default function Profile() {
    const name = 'Pei-Ming Wu';
    const aka = '(aka mkfsn)'
    const address = 'Taiwan. p408865(#)gmail.com';
    const links = [
        {logo: 'home', href: 'https://mkfsn.github.io'},
        {logo: 'logo-github', href: 'https://github.com/mkfsn'},
        {logo: 'logo-twitter', href: 'https://twitter.com/mkfsn'},
        {logo: 'logo-linkedin', href: 'https://linkedin.com/in/mkfsn'},
    ];
    return (
        <header id="me">
            <div className={style.profile}>
                <h1 className={style.name}>
                    <span>{name}</span>
                    &nbsp;
                    <span>{aka}</span>
                </h1>
                <h4 className={style.address}>{address}</h4>
                <h4 className={style.sns}>
                    {links.map((link) => (
                        <a className={style.link} target="_blank" href={link.href} key={link.logo}>
                            <ion-icon name={link.logo} />
                        </a>
                    ))}
                </h4>
            </div>
            <div className={style.avatar}>
               <img src="/avatar.png" alt="avatar"/>
            </div>
        </header>
    )
}

