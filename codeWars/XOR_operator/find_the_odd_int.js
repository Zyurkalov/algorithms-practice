// имеет сложность O(n)
function findOdd(A) {
    if (A.length === 1) return A[0]
    
    const countObj = A.reduce((obj, a) => {
      obj[a] = obj[a] ? obj[a]+1 : 1
      return obj
    }, {})
    
    for(let key in countObj) {
      if (countObj[key]%2 !== 0) return Number(key)
    }
  }
  console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))