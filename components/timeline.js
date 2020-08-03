import style from "./timeline.module.scss";
import dateFormatter from "./formatter";

// -1 denotes undefined behavior
function checkOverlap(t1, t2) {
    if (t1.from >= t2.from && t1.to <= t2.to) {
        //   from ---- t1 ---- to
        // from ------ t2 ------- to
        return -1;
    } else if (t1.from <= t2.from && t1.to >= t2.to) {
        // from ------ t1 ---------- to
        //   from ---- t2 ----- to
        return 2;
    }
    // TODO(mkfsn): implement other cases
    return -1
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
                    if (period.date.from - v.date.from > v.date.to - period.date.to) {
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

function timelineOutline(date, color) {
    return (
        <div className={style['timeline-outline'] + ' ' + style[color]}>
            <div className={style.end}>{dateFormatter(date.to)}</div>
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
            {timelineOutline(period.afterChildren[0].date, period.afterChildren[0].color)}
            <div className={style['timeline-content'] + ' ' + style[period.afterChildren[0].color] }>
                {timelineContentTitle(period.afterChildren[0].title)}
                {timelineContentDetails(period.afterChildren[0].details)}
            </div>
        </div>
    )

    return (
        <div className={style['timeline-container']}>
            {timelineOutline(period.date, period.color)}
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