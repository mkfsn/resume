export default function dateFormatter(input) {
    let date = newDate(input);
    const now = new Date();
    if (!isValidDate(date)) {
        date = now;
    }
    if (now.getFullYear() === date.getFullYear() && now.getMonth() === date.getMonth()) {
        return 'Current';
    }
    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear().toString().substr(2);
    return `${month}'${year}`;
}

function newDate(d) {
    if (d instanceof Date) {
        return d
    }
    return new Date(d)
}

function isValidDate(d) {
    return d instanceof Date && !isNaN(d);
}