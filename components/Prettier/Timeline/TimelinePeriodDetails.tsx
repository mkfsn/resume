import React from "react";
import style from "./TimelinePeriodDetails.module.scss";

interface ITimelinePeriodDetailsProps {
    details: string[] | string;
}

export default class TimelinePeriodDetails extends React.Component<ITimelinePeriodDetailsProps> {
    render() {
        if (Array.isArray(this.props.details)) {
            return (
                <div className={style.detail}>
                    <ul>
                        {this.props.details.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            )
        }
        return <div className={style.detail}>{this.props.details.toString()}</div>
    }
}