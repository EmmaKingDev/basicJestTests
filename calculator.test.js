const {addition, subtraction, multiplication, division, modulo, power, factorial} = require('./calculator')

test('adds 1 + 2 to equal 3', () => {
    expect(addition(1, 2)).toBe(3)
}),
test('subtracts 2 - 1 to equal 1', () => {
    expect(subtraction(2, 1)).toBe(1)
}),
test('multiplies 2 * 2 to equal 4', () => {
    expect(multiplication(2, 2)).toBe(4)
}),
test('divides 4 / 2 to equal 2', () => {
    expect(division(4, 2)).toBe(2)
}),
test('divides 4 / 0, to equal infinity', () => {
    expect(division(4, 0)).toBe(Infinity)
}),
test('divides 4 % 2 to equal 0', () => {
    expect(modulo(4, 2)).toBe(0)
}),
test('pows 2 to the power of 2 to equal 4', () => {
    expect(power(2, 2)).toBe(4)
}),
test('factorial of 2 to equal 2', () => {
    expect(factorial(2)).toBe(2)
})