function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i < number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
let factorialNumber = 7;
let factorialTotal = getFactorial(factorialNumber);
console.log('The number is ', factorialTotal);

let factorialTotalValue = getFactorial(9);
console.log('The factorial value is ', factorialTotalValue);