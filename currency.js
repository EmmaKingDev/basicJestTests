//const fetch = require('node-fetch')

async function convert(base, dest) {
    try {
        const res = await fetch(`https://api.exchangeratesapi.io/latest?base=${base}`)
        const data = await res.json()
        return data.rates[dest]
    } catch (err) {
        console.log(err)
        return null
    }
}

//convert('USD', 'EUR')

module.exports = {convert}