function dateFormatter(input, current = true) {
    let date = newDate(input);

    const now = new Date();
    if (!isValidDate(date)) {
        date = now;
    }
    if (current && now.getFullYear() === date.getFullYear() && now.getMonth() === date.getMonth()) {
        return 'Current';
    }
    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear().toString().substr(0);
    return `${month} ${year}`;
}

function newDate(d): Date {
    if (d instanceof Date) {
        return d
    }
    return new Date(d)
}

function isValidDate(d: Date) {
    return (d instanceof Date) && d.getTime && !isNaN(d.getTime());
}

export {dateFormatter}
