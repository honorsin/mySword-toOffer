 vvar reverseString = function(s) {
    let len = s.length
    for (let left=0,  right = len-1; left < right;) {
        [s[left],s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
};