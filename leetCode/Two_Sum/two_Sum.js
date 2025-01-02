function twoSum (nums, target) {

    for(let i = 0; i < nums.length-1; i++ ) {
        let result = -1

        if(nums[i] <= target) {
            const foundIt = target - nums[i]
            result = nums.slice(i+1).findIndex((n) => n === foundIt) 
        }
        if(result !== -1 ) return [i, result+i+1]
    }
    return []
};

console.log(twoSum([3,2,4], 6))
// в этом коде есть проблема: он не работает корректно с отрицательными числами и сложность O(n^2)

