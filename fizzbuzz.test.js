const {fizzbuzz} = require('./fizzbuzz')

test('fizzbuzz of 1 to equal 1', () => {
    expect(fizzbuzz(1)).toBe(1)
}),
test('fizzbuzz of 3 to equal Fizz', () => {
    expect(fizzbuzz(3)).toBe('Fizz')
}),
test('fizzbuzz of 5 to equal Buzz', () => {
    expect(fizzbuzz(5)).toBe('Buzz')
}),
test('fizzbuzz of 15 to equal FizzBuzz', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz')
}),
test('fizzbuzz of 0 to equal 0', () => {
    expect(fizzbuzz(0)).toBe(0)
})