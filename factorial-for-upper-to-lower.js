function getFactorial(num) {
    let factorial = 1;
    for (let i = num; i >= 1; i--) {
        factorial = factorial * i;
    }
    return factorial;
}
const factorialStatus = getFactorial(5);
console.log('The number factorial value is ', factorialStatus);