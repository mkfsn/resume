export interface IDateRange {
    from: string;
    to: string;
}

export interface IParsedDateRange {
    from: Date;
    to: Date;
}

export class ParsedDateRange implements IParsedDateRange {
    from: Date;
    to: Date;
    constructor(props: IDateRange) {
        this.from = new Date(props.from);
        this.to = new Date(props.to);
    }
}

