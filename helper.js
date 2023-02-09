getTimeDifference = function (value) {
    let date1 = new Date();
    let date2 = new Date(value);
    let Difference_In_Time = date2.getTime() - date1.getTime();
    let Difference_In_Days = (Difference_In_Time / (1000 * 3600 * 24));
    let daysLeft = (Math.trunc(Difference_In_Days));
    return daysLeft;
    // console.log(daysLeft);
}

getDay = function (value) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // console.log(days[value]);
    return days[value];
}

module.exports = { getTimeDifference, getDay };