const { expect } = require('expect')
const { beforeEach } = require('jest-circus')
const {convert} = require('./currency')


// fn creates a test function thaat mimics the api call to the currency api
// need 2 promises because fetch has to "awaits"
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({rates: {CAD: 1.29}})
    })
)

// makes sure to start with a clean slate
beforeEach(() => {
    fetch.mockClear()
})

it('converts USD to CAD', async () => {
    const rate = await convert('USD', 'CAD')

    expect(rate).toEqual(1.29)
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith('https://api.exchangeratesapi.io/latest?base=USD')
})

it('handles exception with null', async () => {
    //override the fetch function to return a rejected promise
    fetch.mockImplementationOnce(() => Promise.reject('API failure'))
    const rate = await convert('USD', 'CAD')

    expect(rate).toEqual(null)
})

