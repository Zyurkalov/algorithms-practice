function sortArray(array){
    const sortedOdds = array.filter(e => e % 2 !== 0).sort((a,b) => a-b)
    let oddIndex = 0;

    return array.map(e => {
        if(e % 2 !== 0) return sortedOdds[oddIndex++]
        return e
    })
}

console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])) //[1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

