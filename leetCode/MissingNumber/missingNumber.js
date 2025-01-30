function missingNumber(nums) {
    const maxNum = nums.length; 
    const expectedSum = (maxNum * (maxNum + 1)) / 2; 
    const actualSum = nums.reduce((accum, current) => accum + current, 0); 

    return expectedSum - actualSum;
}

console.log(missingNumber([0, 1, 3, 4])); //2