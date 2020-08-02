import style from "./timeline.module.scss";
import dateFormatter from "./formatter";

function parsePeriods(periods) {
    const temp = [];
    periods.forEach((period, idx) => {

        period.beforeChildren = [];
        period.afterChildren = [];

        let found = false;
        temp.forEach((v, i) => {
            if (v.date.from >= period.date.from && v.date.to <= period.date.to) {
                // if v is in period:
                // 1. remove v from temp
                // 2. add v to period's child(beforeChildren or afterChildren)
                // TODO(mkfsn):

            } else if (period.date.from >= v.date.from && period.date.to <= v.date.to) {
                // if period is in v
                // 1. add period to v's child(beforeChildren or afterChildren)
                const t1 = period.date.from - v.date.from,
                      t2 = v.date.to - period.date.to;
                if (t1 > t2) {
                    v.afterChildren.push(period);
                } else {
                    v.beforeChildren.push(period);
                }
                found = true;
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
    return (
        <div className={style.title}>
            <h3>{title}</h3>
        </div>
    )
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
    } else if (typeof details === 'string') {
        return (
            <div className={style.detail}>
                {details}
            </div>
        )
    }
    return (
        <div className={style.detail}>
            {details.toString()}
        </div>
    )
}

function Period(period) {
   return (
       <div className={style['timeline-container']}>
           {timelineOutline(period.date, period.color)}
           <div className={style['timeline-content'] + ' ' + style[period.color]}>
               {
                   // TODO(mkfsn)
                   (period.afterChildren[0] !== undefined)  && (
                       <div className={style['timeline-container'] + ' ' + style['overlap']}>
                           {timelineOutline(period.afterChildren[0].date, period.afterChildren[0].color)}
                           <div className={style['timeline-content'] + ' ' + style[period.afterChildren[0].color] }>
                               {timelineContentTitle(period.afterChildren[0].title)}
                               {timelineContentDetails(period.afterChildren[0].details)}
                           </div>
                       </div>
                   )
               }
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