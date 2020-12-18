const intersect = (nums1, nums2) => {
    const map = {};
    const res = [];
    for (const num1 of nums1) {
        if (map[num1]) {
            map[num1]++;  
          } else {         
            map[num1] = 1; 
          }
    }
    for (const num2 of nums2) {
        const val = map[num2];
        if(value > 0) {
            res.push(num2)
            map[num2]--
        }
    }
    return res
}