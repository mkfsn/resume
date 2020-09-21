import style from "./TimelineAxis.module.scss";
import dateFormatter from "../../shared/formatter";
import React from "react";
import { IDateRange } from "./__Date";

interface ITimelineAxisProps {
    date: IDateRange;
    color: string;
}

export default class TimelineAxis extends React.Component<ITimelineAxisProps> {
    render() {
        return <div className={style['timeline-axis'] + ' ' + style[this.props.color]}>
            <div className={style.end}>{dateFormatter(this.props.date.to)}</div>
            <div className={style.begin}>{dateFormatter(this.props.date.from)}</div>
        </div>
    }
}
