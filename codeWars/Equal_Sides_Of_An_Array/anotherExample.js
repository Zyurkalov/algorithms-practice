//почистил код, стало лучше:

function findEvenIndex(arr) {
    let left = 0;
    let right = arr.reduce((sum, num) => sum + num, 0);
  
    for (let i = 0; i < arr.length; i++) {
        right -= arr[i];
  
        if (left === right) {
        return i; 
    }
        left += arr[i];
    }
    return -1;
  }