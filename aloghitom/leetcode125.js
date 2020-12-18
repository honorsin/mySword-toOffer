var isPalindrome = function(s) {
    // 正则去除非单词字符和下划线，然后转化为小写字符
    let str = s.replace(/(\W|_)/g, '').toLowerCase()
    // 下面就是用双指针判断是否是回文字符串的过程了
    let left = 0
    let right = str.length - 1
    while (left < right) {
        if (str[left] !== str[right]) {
            return false
        }
        left++
        right--
    }
    return true
}

作者：cchroot-9
链接：https://leetcode-cn.com/problems/valid-palindrome/solution/zheng-ze-shuang-zhi-zhen-by-cchroot-9/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。