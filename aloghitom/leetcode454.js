var fourSumCount = function(A, B, C, D) {
    const sumMap = new Map();
    for (let a of A) {
        for (let b of B) {
            const sum = a + b;
            sumMap.has(sum) ? sumMap.set(sum, sumMap.get(sum) + 1) : sumMap.set(sum, 1)
        }
    }
    let count = 0;
    for (let c of C) {
        for (let d of D) {
            const sum = c + d;
            if (sumMap.has(-sum)){
                count = count + sumMap.get(-sum)             
            }
        }
    }
    return count
};