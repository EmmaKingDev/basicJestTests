const {sanapeli} = require('./wordplay')

test('kenkä = äknek', () => {
    expect(sanapeli('äknek')).toBe('kenkä')
}),
test('keinulauta = atualuniek', () => {
    expect(sanapeli('keinulauta')).toBe('atualuniek')
}),
test('es = ES', () => {
    expect(sanapeli('es')).toBe('ES')
}),
test('i = i', () => {
    expect(sanapeli('i')).toBe('i')
}),
test('moi = moi', () => {
    expect(sanapeli('moi')).toBe('moi')
}),
test('talo = talo', () => {
    expect(sanapeli('talo')).toBe('talo')
})