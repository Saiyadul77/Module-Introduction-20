function getFactorial(number) {
    let factorial = 1;
    let i = 1;
    while (i <= number) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}
const factorialStatus = getFactorial(7);
console.log('The number of Factorial value is ', factorialStatus);