import React from "react";
import style from "./Timeline.module.scss";
import TimelinePeriod, { ITimelinePeriod } from "./TimelinePeriod";
import { Period } from "./__Period";

interface ITimelineProps {
    periods: ITimelinePeriod[];
    color: string;
}

export default class Timeline extends React.Component<ITimelineProps> {
    render() {
        const periods = Period.parsePeriods(this.props.periods);
        return <div className={style.timeline + ' ' + style[this.props.color]}>
            {periods.map((period: Period) => <TimelinePeriod {...period}/>)}
        </div>
    }
}