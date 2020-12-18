var minSubArrayLen = function(s, nums) {
    let l = 0;
    let r = 0;
    let sum = 0;
    let res = nums.length + 1;
    while (r < nums.length) {
        sum = sum + nums[r];
        while (sum >= s) {
            res = Math.min(res, r - l + 1);
            sum = sum - nums[l];
            l++
        }
        r++
    }
    res = res === nums.length + 1 ? 0 : res;
    return res 
};