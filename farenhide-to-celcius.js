function farenhideToCelcius(farenhide) {
    celcius = (5 * farenhide - 160) / 9;
    return celcius;
}
let temparatureOfFarenhide = 86;
let temparatureOfCelcius = farenhideToCelcius(temparatureOfFarenhide);
console.log('The temparature of ', temparatureOfCelcius);