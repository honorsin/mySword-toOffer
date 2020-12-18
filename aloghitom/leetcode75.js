var sortColors = function (nums) {
    let zero = -1;
    let two = nums.length;
    for (let i = 0; i < two;) {
        if (nums[i] === 1) {
            i++
        } else if (nums[i] === 2) {
            two--;
            [nums[i], nums[two]] = [nums[two], nums[i]]
        } else if (nums[i] === 0) {
            zero++;
            [nums[i], nums[zero]] = [nums[zero], nums[i]];
            i++;
        }
    }
};