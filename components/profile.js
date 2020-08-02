import style from "./profile.module.scss"

export default function Profile() {
    const name = 'Pei-Ming Wu';
    const aka = '(aka mkfsn)'
    const address = 'Taiwan. p408865(#)gmail.com';
    const links = [
        {color: 'rgb(78,165,133)', logo: 'home', href: 'https://mkfsn.github.io'},
        {color: 'rgb(33,37,40)', logo: 'logo-github', href: 'https://github.com/mkfsn'},
        {color: 'rgb(43,152,236)', logo: 'logo-twitter', href: 'https://twitter.com/mkfsn'},
        {color: 'rgb(23,104,166)', logo: 'logo-linkedin', href: 'https://linkedin.com/in/mkfsn'},
    ];
    return (
        <header id="me">
            <div className={style.profile}>
                <h1 className={style.name}>
                    <span>{name}</span>
                    &nbsp;
                    <span className={style.aka}>{aka}</span>
                </h1>
                <h4 className={style.address}>{address}</h4>
                <h4 className={style.sns}>
                    {links.map((link) => (
                        <a className={style.link} target="_blank" href={link.href} key={link.logo}>
                            <ion-icon name={link.logo} style={{color: link.color}}/>
                        </a>
                    ))}
                </h4>
            </div>
            <div className={style.avatar}>
               <img src="/resume/avatar.png" alt="avatar"/>
            </div>
        </header>
    )
}

