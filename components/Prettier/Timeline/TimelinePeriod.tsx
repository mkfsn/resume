import React from "react";
import style from "./TimelinePeriod.module.scss";
import dateFormatter from "../../shared/formatter";
import { IDateRange, IParsedDateRange } from "./__Date";

export interface ITimelinePeriod {
    color?: string;
    date: IDateRange;
    details: string[];
    icon?: string;
    organization?: string;
    title: string;
}

interface ITimelinePeriodProps extends ITimelinePeriod {
    afterChildren: any[];
    beforeChildren: any[];
    parsedDate?: IParsedDateRange;
}

class TimelinePeriod extends React.Component<ITimelinePeriodProps> {
    render() {
        const afterBlock = this.props.afterChildren && this.props.afterChildren[0] !== undefined && (
            <div className={style['timeline-container'] + ' ' + style['overlap']}>
                {timelineOutline(this.props.afterChildren[0].date, this.props.afterChildren[0].color)}
                <div className={style['timeline-content'] + ' ' + style[this.props.afterChildren[0].color] }>
                    {timelineContentTitle(this.props.afterChildren[0].title, this.props.afterChildren[0].icon)}
                    {timelineContentDetails(this.props.afterChildren[0].details)}
                </div>
            </div>
        )
        return (
            <div className={style['timeline-container']} key={this.props.title}>
                {timelineOutline(this.props.date, this.props.color)}
                <div className={style['timeline-content'] + ' ' + style[this.props.color]}>
                    {afterBlock}
                    {timelineContentTitle(this.props.title, this.props.icon)}
                    {timelineContentDetails(this.props.details)}
                </div>
            </div>
        )
    }
}

function timelineOutline(date, color) {
    return (
        <div className={style['timeline-outline'] + ' ' + style[color]}>
            <div className={style.end}>{dateFormatter(date.to)}</div>
            <div className={style.begin}>{dateFormatter(date.from)}</div>
        </div>
    )
}

function timelineContentTitle(title, icon) {
    return <div className={style.title}>
        <h3>
            {icon && (
                <img className={style.icon} alt="" src={icon} />
            )}
            {title}
        </h3>
    </div>
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

export default TimelinePeriod;