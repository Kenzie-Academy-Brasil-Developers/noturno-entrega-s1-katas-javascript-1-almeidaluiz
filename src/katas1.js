function oneThroughTwenty() {

    /* Your code goes below
    Write a for or a while loop
    return the result*/

    let meuRetorno = [];

    for (let counter = 1; counter <= 20; counter++) {
        meuRetorno.push(counter)
    }

    return meuRetorno;
}
console.log(oneThroughTwenty());
//call function oneThroughTwenty

function evensToTwenty() {

    /* Your code goes below
    Write a for or a while loop
    return the result */

    let meuRetorno = [];

    for (let counter = 2; counter <= 20; counter += 2) {
        meuRetorno.push(counter)
    }

    return meuRetorno;

}
console.log(evensToTwenty());
//call function evensToTwenty

function oddsToTwenty() {

    /* Your code goes below
    Write a for or a while loop
    return the result */

    let meuRetorno = [];

    for (let counter = 1; counter < 20; counter += 2) {
        meuRetorno.push(counter)
    }

    return meuRetorno

}
console.log(oddsToTwenty())
    //call function oddsToTwenty

function multiplesOfFive() {

    /* Your code goes below
    Write a for or a while loop
    return the result */

    let meuRetorno = [];

    for (let counter = 5; counter <= 100; counter += 5) {
        meuRetorno.push(counter)
    }

    return meuRetorno

}
console.log(multiplesOfFive())
    //call function multiplesOfFive

function squareNumbers() {

    /* Your code goes below
     Write a for or a while loop
     return the result */

    let meuRetorno = [];

    for (let counter = 1; counter <= 10; counter++) {

        meuRetorno.push(counter * counter)
    }

    return meuRetorno

}
console.log(squareNumbers())
    //call function squareNumbers

function countingBackwards() {

    /* Your code goes below
    Write a for or a while loop
    return the result */

    let meuRetorno = [];

    for (let counter = 20; counter >= 1; counter--) {
        meuRetorno.push(counter)
    }

    return meuRetorno
}
console.log(countingBackwards())
    //call function countingBackwards

function evenNumbersBackwards() {

    /* Your code goes below
     Write a for or a while loop
     return the result */

    let meuRetorno = [];

    for (let counter = 20; counter > 0; counter -= 2) {
        meuRetorno.push(counter)
    }

    return meuRetorno;

}
console.log(evenNumbersBackwards());
//call function evenNumbersBackwards

function oddNumbersBackwards() {

    /* Your code goes below
     Write a for or a while loop
     return the result */

    let meuRetorno = [];

    for (let counter = 19; counter > 0; counter -= 2) {
        meuRetorno.push(counter)
    }

    return meuRetorno

}
console.log(oddNumbersBackwards())
    //call function oddNumbersBackwards

function multiplesOfFiveBackwards() {

    /* Your code goes below
     Write a for or a while loop
     return the result */

    let meuRetorno = [];

    for (let counter = 100; counter >= 5; counter -= 5) {
        meuRetorno.push(counter)
    }

    return meuRetorno

}
console.log(multiplesOfFiveBackwards())
    //call function multiplesOfFiveBackwards

function squareNumbersBackwards() {

    /* Your code goes below
  Write a for or a while loop
  return the result */

    let meuRetorno = [];

    for (let counter = 10; counter >= 1; counter--) {

        meuRetorno.push(counter * counter)
    }

    return meuRetorno

}
console.log(squareNumbersBackwards())

//call function squareNumbersBackwards