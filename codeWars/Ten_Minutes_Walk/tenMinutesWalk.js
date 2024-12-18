function isValidWalk(walk) {
    if(walk.length === 10) {
        const mapDirection = walk.reduce((result, x) => {
            result[x] = result[x] ? result[x]+1 : 1
            return result
        }, {})
        return mapDirection.n === mapDirection.s && mapDirection.w === mapDirection.e ? true : false
    }
    return false
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])) //true
console.log(isValidWalk(['n','w','n','w','n','w','n','w','n','w'])) //false
console.log(isValidWalk(['n'])) //false