var removeDuplicates = function(nums) {
    let count = 0
    const length = nums.length
    for(let i = 1; i <length; i++) {
        if (nums[i-1] !== nums[i]) {
            nums[i-count] = nums[i];
        } else {
            count++
        }
    }
    return length-count
};