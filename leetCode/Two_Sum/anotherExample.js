var twoSum = function(nums, target) {
    const numMap = new Map(); 
    for (let i = 0; i < nums.length; i++) {    
        const complement = target - nums[i]; 

        if (numMap.has(complement)) { 
            return [numMap.get(complement), i];
        }
        numMap.set(nums[i], i); 
    }
    return []; 
};

console.log(twoSum([-1, -2, -3, -4, -5], -8));
// в этом примере проблема с отрицательными числами решена и сложность O(n)