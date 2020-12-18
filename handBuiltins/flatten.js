function flatten(arr) {
    arr.reduce((prev, next) => prev.concat(Array.isArray(next)
    ? flatten(next)
    : next), [])
}