import style from "./profile.module.css"

export default function Profile() {
    const name = 'Pei-Ming Wu';
    const aka = '(aka mkfsn)'
    const address = 'Taiwan. p408865(&#35;)gmail.com';
    const links = [
        {logo: 'home', href: 'https://mkfsn.github.io'},
        {logo: 'logo-github', href: 'https://github.com/mkfsn'},
        {logo: 'logo-twitter', href: 'https://twitter.com/mkfsn'},
        {logo: 'logo-linkedin', href: 'https://linkedin.com/in/mkfsn'},
    ];
    return (
        <header id="me">
            <h1 className={style.name}>
                <span>{name}</span>
                &nbsp;
                <span>{aka}</span>
            </h1>
            <h4 className={style.address}>{address}</h4>
            <h4 className={style.sns}>
                {links.map((link) => (
                    <a className={style.link} target="_blank" href={link.href}>
                        <ion-icon name={link.logo} />
                    </a>
                ))}
            </h4>
        </header>
    )
}

