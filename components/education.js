import Timeline from "./timeline";
import style from "./education.module.scss"
import dateFormatter from "./formatter";

export default function Education() {
    const educations = [
        // https://web.ncku.edu.tw/var/file/0/1000/msys_1000_556236_23708.ico
        {
            title: 'Institute of Computer and Communication Engineering, Department of Engineering, National Cheng Kung University, Taiwan.',
            // date: 'Sep\'13 - Sep\'16',
            date: {
                from: new Date(2013, 9-1, 1),
                to: new Date(2016,9-1,1),
            },
            details: 'Master of Computer and Communication Engineering',
            color: 'yellow',
        },
        // https://www.osaka-u.ac.jp/favicon.ico
        {
            title: 'Graduate School of Information Science and Technology, Osaka University, Japan.',
            // date: 'Sep\'15 - Aug\'16',
            date: {
                from: new Date(2015, 9-1, 1),
                to: new Date(2016,8-1,1),
            },
            details: 'Exchange Student',
            color: 'blue',
        },
        // https://www.nsysu.edu.tw//var/file/0/1000/msys_1000_5687921_59580.ico
        {
            title: 'Department of Computer Science Engineering, National Sun Yat-Sen University, Taiwan.',
            // date: 'Sep\'09 - Jun\'13',
            date: {
                from: new Date(2009, 9-1, 1),
                to: new Date(2013,6-1,1),
            },
            details: 'Bachelor of Engineering',
            color: 'yellow',
        },
    ];
    return (
        <section id="education">
            <h1>Education</h1>
            <Timeline periods={educations} color="yellow"/>
            {educations.map((education) => (
                <div className={style.education} key={education.title}>
                    <p className={style.name}>{education.title}</p>
                    <p className={style.date}>{dateFormatter(education.date.from)} - {dateFormatter(education.date.to)}</p>
                    <p className={style.degree}>{education.details}</p>
                </div>
            ))}
        </section>
    )
}