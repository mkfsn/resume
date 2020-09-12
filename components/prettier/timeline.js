import style from "./timeline.module.scss";
import dateFormatter from "../shared/formatter";

// -1 denotes undefined behavior
function checkOverlap(t1, t2) {
    if (dateContains(t2, t1)) {
        return -1;
    } else if (dateContains(t1, t2)) {
        return 2;
    }
    // TODO(mkfsn): implement other cases
    return -1
}

// dateContains returns whether t1 contains t2:
// |--------- t1 ----------|
//    | ----- t2 --------|
function dateContains(t1, t2) {
    return new Date(t1.from) <= new Date(t2.from) &&
        new Date(t1.to) >= new Date(t2.to)
}

function parsePeriods(periods) {
    const temp = [];
    periods.forEach((period) => {
        period.beforeChildren = [];
        period.afterChildren = [];

        let found = false;
        temp.forEach((v) => {
            switch (checkOverlap(v.date, period.date)) {
                case -1: // ignore
                    break;
                case 2:
                    if (new Date(period.date.from) - new Date(v.date.from) > new Date(v.date.to) - new Date(period.date.to)) {
                        v.afterChildren.push(period);
                    } else {
                        v.beforeChildren.push(period);
                    }
                    found = true;
                    break;
            }
        });
        if (!found) {
            temp.push(period);
        }
    })
    return temp;
}

function timelineOutline(date, color, icon) {
    return (
        <div className={style['timeline-outline'] + ' ' + style[color]}>
            <div className={style.end}>{dateFormatter(date.to)}</div>
            {icon !== undefined && (
                <div className={style.icon}>
                    <img alt="icon" src={icon} />
                </div>
            )}
            <div className={style.begin}>{dateFormatter(date.from)}</div>
        </div>
    )
}

function timelineContentTitle(title) {
    return <div className={style.title}><h3>{title}</h3></div>
}

function timelineContentDetails(details) {
    if (Array.isArray(details)) {
        return (
            <div className={style.detail}>
                <ul>
                    {details.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        )
    }
    return <div className={style.detail}>{details.toString()}</div>
}

function Period(period) {
    const afterBlock = period.afterChildren[0] !== undefined && (
        <div className={style['timeline-container'] + ' ' + style['overlap']}>
            {timelineOutline(period.afterChildren[0].date, period.afterChildren[0].color, period.afterChildren[0].icon)}
            <div className={style['timeline-content'] + ' ' + style[period.afterChildren[0].color] }>
                {timelineContentTitle(period.afterChildren[0].title)}
                {timelineContentDetails(period.afterChildren[0].details)}
            </div>
        </div>
    )

    return (
        <div className={style['timeline-container']} key={period.title}>
            {timelineOutline(period.date, period.color, period.icon)}
            <div className={style['timeline-content'] + ' ' + style[period.color]}>
                {afterBlock}
                {timelineContentTitle(period.title)}
                {timelineContentDetails(period.details)}
            </div>
        </div>
    )
}

export default function Timeline(props) {
    const periods = parsePeriods(props.periods);
    return (
        <div className={style.timeline + ' ' + style[props.color]}>
            {periods.map((period) => Period(period))}
        </div>
    )
}