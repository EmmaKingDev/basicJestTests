function addition(a, b) {
    return a + b
}

function subtraction(a, b) {
    return a - b
}

function multiplication(a, b) {
    return a * b
}

function division(a, b) {
    return a / b
}

function modulo(a, b) {
    return a % b
}

function power(a, b) {
    return Math.pow(a, b)
}

function factorial(a) {
    let result = 1
    for (let i = 1; i <= a; i++) {
        result *= i
    }
    return result
}

module.exports = {
    addition,
    subtraction,
    multiplication,
    division,
    modulo,
    power,
    factorial
}