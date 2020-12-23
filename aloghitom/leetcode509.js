var fib = function(n) {
    let save = []
    if (n === 0 || n === 1)
        return n
    for (let i = 2; i < n; i++){
        sum = pre + cur;
        pre = cur;
        cur = sum;
    }
    return save[n]
};