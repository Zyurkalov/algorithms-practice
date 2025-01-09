//мое решение
function collectFruits(s) {
  const map = new Map();
  let maxCount = 0;
  let secondCount = 0

    for (let i = 0; i < s.length; i++) {

      const count = (map.get(s[i]) || 0) + 1
      map.set(s[i], count )

      if(maxCount < count) maxCount = count   
    }

    map.forEach(el => {
      if(maxCount > el && el > secondCount) {
        secondCount = el
      }
    })
    return maxCount + secondCount
}

const test = [0,1,2,3,2,2,2] 
console.log(collectFruits(test)) //5