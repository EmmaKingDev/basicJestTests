const fs = require('fs')

function reader(file, index) {
    let lines = []
    if (!fs.existsSync(file)) {
        return 'File not found'
    } else if (fs.statSync(file).size === 0) {
        return 'Empty file'
    } else if (index < 0) {
        return 'IndexError'
    } else {
        fs.readFileSync(file, 'utf-8').split('\n').forEach(line => {
            lines.push(line.trim())
        })
        if (index > lines.length) {
            return 'IndexError'
        } else {
            return lines[index]
        }
    }
}

/* function reader(file, index) {
    let lines = []
    try {
        if (!fs.existsSync(file)) {
            throw new Error('File not found')
        } else if (fs.statSync(file).size === 0) {
            throw new Error('Empty file')
        } else if (index < 0) {
            throw new Error('IndexError')
        } else {
            fs.readFileSync(file, 'utf-8').split('\n').forEach(line => {
                lines.push(line.trim())
            })
            if (index > lines.length) {
                throw new Error('IndexError')
            } else {
                console.log(lines[index])
                return lines[index]
            }
        }
    } catch (error) {
        return error.message
    }
} */

reader('sample.txt', 9) // marsu

module.exports = { reader }