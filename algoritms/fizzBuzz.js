function fizzBuzz (number) {
    let resultArr = []
    
    for (let i = 1; i <= number; i++) {
        let value = ''

        if(i % 3 === 0) value += 'Fizz'
        if(i % 5 === 0) value +='Buzz'

        resultArr.push(value || i)
    }
    console.log(resultArr)
}

const args = process.argv.slice(2);
if (typeof(args) === 'number' || args.length) {
    args.forEach((arg) => {
        fizzBuzz(Math.round(arg))
    })
} else {
    console.log('Функции fizzBuzz нужно передать аргумент, в виде числа')
}