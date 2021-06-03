const lodash = require('lodash')

const notas = [
    {
        semestre: 'P1',
        nota: 5.6
    },
    {
        semestre: 'P2',
        nota: 8.1
    }
]

const media = lodash.sumBy(notas, 'nota') / notas.length
console.log('Média: ' + media)