var searchRange = function (nums, target) {
    let returnArr = [];
    function leftBound(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        while (left < = right) {
            let mid = left + (right - left) / 2;
            if (nums[mid] < target) {
                left = mid + 1;
            } else if (nums[mid] > target) {
                right = mid - 1;
            } else if (nums[mid] == target) {
                // 直接返回
                right = mid - 1;
            }
        }

        if (left >= nums.length || nums[left] != target)
            returnArr[0] = -1;
        returnArr[0] = left;
    }
    function rightBound(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        while (left < = right) {
            let mid = left + (right - left) / 2;
            if (nums[mid] < target) {
                left = mid + 1;
            } else if (nums[mid] > target) {
                right = mid - 1;
            } else if (nums[mid] == target) {
                // 直接返回
                left = mid + 1;
            }
        }

        if (right < 0 || nums[left] != target)
            returnArr[1] = -1;
        returnArr[1] = right;
    };
};
