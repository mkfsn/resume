export default function dateFormatter(date) {
    const now = new Date();
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