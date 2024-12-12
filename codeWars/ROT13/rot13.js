import nodeProcess from "../../services/nodeProcess.js";

function rot13(str) {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const upperLetters = letters.split('')

    const cipherObjectKey = upperLetters.reduce((obj, letter, index) => {
        if(index < 13) {
            obj[letter] = upperLetters[index + 13]
        }
        else {
            obj[letter] = upperLetters[index - 13]
        }
        return obj;
    }, {})

    let result = ''

    str.split('').map((letter) => {
        const code = letter.charCodeAt();
        if(code >= 65 && code <= 90) {
            // буква заглавная
            result += cipherObjectKey[letter]
        }
        else if(code >= 97 && code <= 122) {
            // буква прописная
            const upperLetter = letter.toUpperCase();
            result += cipherObjectKey[upperLetter].toLowerCase();
        }
        else {
            // иной символ
            result += letter
        }   
    })
    return result
}


nodeProcess('Функции findVowels нужно передать аргумент, в виде строки', rot13)