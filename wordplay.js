function sanapeli(sana) {
    if (sana.length === 1 || sana.length === 3 || sana.length === 4) {
        return sana
    } else if (sana.length === 2) {
        return sana.toUpperCase()
    } else {
        // eli sana arrayksi, sitten array reversataan ja sitten takaisin sanaksi
        return sana.split('').reverse().join('')
    }
}

function splitSentence(sentence) {
    let sanat = sentence.split(' ')
    for (let i = 0; i < sanat.length; i++) {
        sanapeli(sanat[i])
    }
}

splitSentence('äknek ei joo') // kenkä EI joo

module.exports = {sanapeli}