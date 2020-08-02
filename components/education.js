import style from "./education.module.scss"

export default function Education() {
    const educations = [
        {
            name: 'Institute of Computer and Communication Engineering, Department of Engineering, National Cheng Kung University, Taiwan.',
            date: 'Sep\'13 - Sep\'16',
            degree: 'Master of Computer and Communication Engineering',
        },
        {
            name: 'Graduate School of Information Science and Technology, Osaka University, Japan.',
            date: 'Sep\'15 - Aug\'16',
            degree: 'Exchange Student',
        },
        {
            name: 'Department of Computer Science Engineering, National Sun Yat-Sen University, Taiwan.',
            date: 'Sep\'09 - Jun\'13',
            degree: 'Bachelor of Engineering',
        },
    ];
    return (
        <section id="education">
            <h1>Education</h1>
            {educations.map((education) => (
                <div className={style.education} key={education.name}>
                    <p className={style.name}>{education.name}</p>
                    <p className={style.date}>{education.date}</p>
                    <p className={style.degree}>{education.degree}</p>
                </div>
            ))}
        </section>
    )
}