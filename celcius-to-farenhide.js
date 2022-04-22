function celciusToFerenhide(celcius) {
    farenhide = (9 * celcius + 160) / 5;
    return farenhide;
}
let celciusTemparature = celciusToFerenhide(30);
console.log('The convert temparature is ', celciusTemparature);