const {reader} = require('./lineReader')

test('indexError', () => {
    const file = './sample.txt'
    const index = 9
    const expected = 'IndexError'
    expect(reader(file, index)).toBe(expected)
}),
test('equals', () => {
    const file = './sample.txt'
    const index = 2
    expect(reader(file, index)).toBe('marsu')
}),
test('file not found', () => {
    const file = ''
    const index = 2
    const expected = 'File not found'
    expect(reader(file, index)).toBe(expected)
}),
test('empty file', () => {
    const file = './empty.txt'
    const index = 2
    const expected = 'Empty file'
    expect(reader(file, index)).toBe(expected)
}),
test('indexError', () => {
    const file = './sample.txt'
    const index = -1
    const expected = 'IndexError'
    expect(reader(file, index)).toBe(expected)
})