
function palindrome(str) {
    const cleanedStr = str.replace(/[^\w]/g, '').toLowerCase()
    return cleanedStr === cleanedStr.split('').reverse().join('')
}

const args = process.argv.slice(2);
if (args.length) {
    args.forEach((arg) => {
        console.log(`"${arg}" is a palindrome: ${palindrome(arg)}`);
    })
} else {
    console.log('Переданы неверные аргументы')
}
