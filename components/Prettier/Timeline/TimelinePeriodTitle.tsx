import React from "react";
import style from "./TimelinePeriodTitle.module.scss";

interface ITimelinePeriodTitleProps {
    title: string;
    icon?: string;
}

export default class TimelinePeriodTitle extends React.Component<ITimelinePeriodTitleProps> {
    render() {
        return <div className={style.title}>
            <h3>
                {this.props.icon && (
                    <img className={style.icon} alt="" src={this.props.icon} />
                )}
                {this.props.title}
            </h3>
        </div>
    }
}