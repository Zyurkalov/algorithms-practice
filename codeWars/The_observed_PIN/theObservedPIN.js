function getPINs(observed) {
    const keypad = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [undefined, 0, undefined]
    ];
    
    const code = observed.split('')
  
    const indexInArray = code.map(el => {
      for (let i = 0; i < keypad.length; i++) {
        const indexInSubArray = keypad[i].indexOf(Number(el))
        if (indexInSubArray !== -1) return { indexArray: i, indexSubArray: indexInSubArray } 
      }
    });
  
    const getNumberArrays = (obj) => {
      const arr = [];
      arr.push(keypad[obj.indexArray][obj.indexSubArray])
  
      if (obj.indexSubArray > 0) arr.push(keypad[obj.indexArray][obj.indexSubArray - 1])
      if (obj.indexSubArray < keypad[obj.indexArray].length - 1) arr.push(keypad[obj.indexArray][obj.indexSubArray + 1])
      if (obj.indexArray > 0) arr.push(keypad[obj.indexArray - 1][obj.indexSubArray])
      if (obj.indexArray < keypad.length - 1) arr.push(keypad[obj.indexArray + 1][obj.indexSubArray])
  
      return arr.filter(el => el !== undefined)
    }
  
    const combinations = indexInArray.map(obj => getNumberArrays(obj))
      const generateCombinations = (arrays) => {
      return arrays.reduce((acc, curr) => {
        const result = []
        acc.forEach(a => {
          curr.forEach(b => {
            result.push(a.concat(b))
          });
        });
        return result
      }, [[]])
    }
  
    return generateCombinations(combinations).map(arr => arr.join(''))
  }
  
  console.log(getPINs('011'))