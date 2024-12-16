import nodeProcess from "../../services/nodeProcess.js";

function duplicateEncode(word){
    const wordsArr = word.toLowerCase().split('')

    const countObj = wordsArr.reduce((acc, w) => {
        acc[w] = (acc[w] || 0) + 1;
        return acc
    }, {})

    return wordsArr.map(w => countObj[w] === 1 ? '(' : ')').join('')
}
// console.log(duplicateEncode('Success'))
nodeProcess('Функции duplicateEncode нужно передать аргумент, в виде строки', duplicateEncode)