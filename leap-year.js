function leapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
}
const myYear = 2020;
const yearStatus = leapYear(myYear);
console.log('is year Leap year ', yearStatus);