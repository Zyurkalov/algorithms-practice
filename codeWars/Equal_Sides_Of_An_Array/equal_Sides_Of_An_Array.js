function findEvenIndex(arr) {
    let index = -1
    let left = 0
    let right = arr.slice(1).reduce((sum, num) => sum + num, 0)
  
  
    for(let i=0; i < arr.length; i++) {
        left += arr[i-1] ?? 0;
        right -= (arr[i] !== undefined && i) ? arr[i] : 0;

        if(left === right) { 
            index = i; 
            break;
        }
    }
    return index
  }
  
  console.log(findEvenIndex([1,2,3,4,3,2,1])) // 3
  console.log(findEvenIndex([20,10,-80,10,10,15,35])) // 0
  console.log(findEvenIndex([1, 100, 50, -51, 1, 1])) // 1


