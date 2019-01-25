export function formatDateTime(isoDateAsString) {
    const dateTime = new Date(isoDateAsString);

    const paddingZero = (number) => { return number < 10 ? '0' + number : number };
    return dateTime.getFullYear() + '-' + paddingZero(dateTime.getMonth()+1) + '-' + paddingZero(dateTime.getDay())
    + ' ' + paddingZero(dateTime.getHours()) + ':' + paddingZero(dateTime.getMinutes());
}