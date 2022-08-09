function fizzbuzz(num) {
    if (num === 0) {
        return 0
    } else if (num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz'
    } else if (num % 3 === 0) {
        return 'Fizz'
    } else if (num % 5 === 0) {
        return 'Buzz'
    } else {
        return num
    }
}

fizzbuzz(15) // FizzBuzz

module.exports = {fizzbuzz}