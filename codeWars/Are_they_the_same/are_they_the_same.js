//мое второе решение, через сортировку. Имеет сложность O(n log n)
function comp(array1, array2){
    if (!array1 || !array2 || array1.length !== array2.length) return false
    
    const sortedArray1 = array1.map(num => num * num).sort((a, b) => a - b)
    const sortedArray2 = array2.sort((a, b) => a - b)
  
    for (let i = 0; i < sortedArray1.length; i++) {
      if (sortedArray1[i] !== sortedArray2[i]) {
        return false;
      }
    }
    return true
  }

const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
const a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];

console.log(comp(a1, a2)) //true