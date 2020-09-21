import React from "react";
import style from "./TimelinePeriod.module.scss";
import { IDateRange, IParsedDateRange } from "./__Date";
import TimelineAxis from "./TimelineAxis";
import TimelinePeriodTitle from "./TimelinePeriodTitle";
import TimelinePeriodDetails from "./TimelinePeriodDetails";

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

export default class TimelinePeriod extends React.Component<ITimelinePeriodProps> {
    render() {
        const afterBlock = this.props.afterChildren && this.props.afterChildren[0] !== undefined && (
            <div className={style['timeline-container'] + ' ' + style['overlap']}>
                <TimelineAxis date={this.props.afterChildren[0].date} color={this.props.afterChildren[0].color} />
                <div className={style['timeline-content'] + ' ' + style[this.props.afterChildren[0].color] }>
                    <TimelinePeriodTitle title={this.props.afterChildren[0].title} icon={this.props.afterChildren[0].icon}/>
                    <TimelinePeriodDetails details={this.props.afterChildren[0].details} />
                </div>
            </div>
        )
        return (
            <div className={style['timeline-container']} key={this.props.title}>
                <TimelineAxis date={this.props.date} color={this.props.color} />
                <div className={style['timeline-content'] + ' ' + style[this.props.color]}>
                    {afterBlock}
                    <TimelinePeriodTitle title={this.props.title} icon={this.props.icon}/>
                    <TimelinePeriodDetails details={this.props.details} />
                </div>
            </div>
        )
    }
}