Function.prototype.myCall = function (context = globalThis) {
    const key = Symbol('key')
    context[key] = this
    let args = [].slice.call(arguments, 1)
    let res = context[key](...args)
    return res
}
Function.prototype.myApply = function (context = globalThis) {
    const key = Symbol('key')
    context[key] = this
    let res = context[key](...arguments[1])
    return res
}