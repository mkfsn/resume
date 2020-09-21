import { ITimelinePeriod } from "./TimelinePeriod";
import { IDateRange, IParsedDateRange, ParsedDateRange } from "./__Date";

export class Period implements ITimelinePeriod {
    color: string;
    date: IDateRange;
    details: string[];
    icon: string;
    organization: string;
    title: string;
    afterChildren: any[];
    beforeChildren: any[];
    parsedDate: IParsedDateRange;

    constructor(props: ITimelinePeriod) {
        this.color = props.color;
        this.date = {from: props.date.from, to: props.date.to};
        this.details = props.details;
        this.icon = props.icon;
        this.organization = props.organization;
        this.title = props.title;
        this.afterChildren = [];
        this.beforeChildren = [];
        this.parsedDate = new ParsedDateRange(props.date);
    }

    static parsePeriods(periods: ITimelinePeriod[]): Period[] {
        const temp: Period[] = [];
        periods.forEach((props) => {
            let period = new Period(props);
            period.afterChildren = [];

            let found = false;
            temp.forEach((v) => {
                switch (v.checkOverlap(period.date)) {
                    case -1: // ignore
                        break;
                    case 2:
                        if ((period.parsedDate.from.getTime() - v.parsedDate.from.getTime()) > (v.parsedDate.to.getTime() - period.parsedDate.to.getTime())) {
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

    // -1 denotes undefined behavior
    checkOverlap(t: IDateRange): number {
        if (dateContains(t, this.date)) {
            return -1;
        } else if (dateContains(this.date, t)) {
            return 2;
        }
        // TODO(mkfsn): implement other cases
        return -1
    }
}

// dateContains returns whether t1 contains t2:
// |--------- t1 ----------|
//    | ----- t2 --------|
function dateContains(t1, t2) {
    return new Date(t1.from) <= new Date(t2.from) &&
        new Date(t1.to) >= new Date(t2.to)
}