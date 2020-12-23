function curry(fn,arr=[]){
   
    arr.length===fn.length?fn.apply(null,arr):function(...args){
return curry(fn,arr.concat(args))
    }
}
const curry2 = (fn, arr = []) => arr.length === fn.length ? fn(...arr) : (...args) => curry2(fn, [...arr, ...args])

function getUrlToJson(url) {
    let obj = {}
    let index = url.indexOf('?')
    let str = url.substring(index + 1)
    const strArr = str.split('&')
    for (let i = 0; i < strArr.length; i++) {
        let arr = strArr[i].split('=')
        obj[arr[0]] = arr[1]
    }
    return obj
}






