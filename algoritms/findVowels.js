import cleanedStr  from "../services/cleanedStr.js";
import nodeProcess from "../services/nodeProcess.js";

function findVowels(str) {
    const vowelsArr = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е']
    
    return cleanedStr(str).split('').filter(letter => vowelsArr.includes(letter)).length;
}

nodeProcess('Функции findVowels нужно передать аргумент, в виде строки', findVowels)