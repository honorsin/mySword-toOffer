function binarysearch(arr, n, target) {
    // 左闭右开区间
    let r = n;
    let l = 0;
    while (l < r) {
        // 不使用加法，避免内存溢出
        let mid = l + Math.floor((r - l) / 2)
          
        if (arr[mid] === target) {
            return mid;
        }
        if (target > arr[mid]) {
            l = mid + 1;
        }
        else {
            r = mid;
        }
    }
    return false
}