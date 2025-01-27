const houses = [4, 11, 10, 1, 2, 8, 5]

function robHouses (houses) {
    if(houses.length <= 0) return 0;
    if(houses.length === 1) return houses[0];
    
    const rh = [houses[0]]
    for(let i=1; i<houses.length; i++) {
         rh.push(Math.max((rh[i-2] || 0)+houses[i], rh[i-1]))
    }
    return rh[rh.length - 1]
}

console.log(robHouses(houses))