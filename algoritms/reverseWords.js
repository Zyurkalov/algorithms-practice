
function reverseWords (str) {
    const cleanedStr = str.replace(/[^\w\s]/g, '').toLowerCase()
    const result = cleanedStr.split(' ').reverse().join(' ')
    console.log(result)
}

const args = process.argv.slice(2);
if (args.length) {
    args.forEach((arg) => {
        reverseWords(arg);
    })
} else {
    console.log('Функции reverseWords нужно передать аргумент, в виде строки')
}