function simpleInterest(a, b, c) {
    interest = a * b * c;
    return interest;
}
let principalAmount = 5000;
let time = 5;
let interestPercent = 10 / 100;
let interestStatus = simpleInterest(principalAmount, time, interestPercent);
console.log('The interest amount is ', interestStatus);