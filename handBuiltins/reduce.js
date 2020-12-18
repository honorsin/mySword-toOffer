Array.prototype.myReduce = (f, val) => {
    const arr = this;
    let acc = val || arr[0];
    const index = val? 0: 1;
    for (let i = index; i < arr.length; i++) {
        const cur = arr[i];
        acc = f(acc, cur, i, arr)
    }
    return acc
}