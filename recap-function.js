// function isSun() {
//     return true;
// }
// var sunStatus = isSun();
// console.log(sunStatus);

function isSun(time) {
    if (time > 5 && time <= 17) {
        return true;
    }
    return false;
}
var sunStatus = isSun(9);
console.log(sunStatus);