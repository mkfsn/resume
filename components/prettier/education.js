import Timeline from "./timeline";

export default function Education() {
    const educations = [
        {
            title: 'Institute of Computer and Communication Engineering, National Cheng Kung University, Taiwan.',
            // icon: 'https://web.ncku.edu.tw/var/file/0/1000/msys_1000_556236_23708.ico',
            date: {
                from: new Date(2013, 9-1, 1),
                to: new Date(2016,9-1,1),
            },
            details: 'Master of Science',
            color: 'yellow',
        },
        {
            title: 'Graduate School of Information Science and Technology, Osaka University, Japan.',
            icon: 'https://www.osaka-u.ac.jp/favicon.ico',
            date: {
                from: new Date(2015, 9-1, 1),
                to: new Date(2016,8-1,1),
            },
            details: 'Exchange Student',
            color: 'blue',
        },
        {
            title: 'Computer Science Engineering, National Sun Yat-Sen University, Taiwan.',
            icon: 'https://www.nsysu.edu.tw//var/file/0/1000/msys_1000_5687921_59580.ico',
            date: {
                from: new Date(2009, 9-1, 1),
                to: new Date(2013,6-1,1),
            },
            details: 'Bachelor of Science',
            color: 'yellow',
        },
    ];
    console.log({educations});
    return (
        <section id="education">
            <h1>Education</h1>
            <Timeline periods={educations} color="yellow"/>
        </section>
    )
}