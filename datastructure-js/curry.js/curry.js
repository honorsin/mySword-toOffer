function curry(fn,arr=[]){
   
    arr.length===fn.length?fn.apply(null,arr):function(...args){
return curry(fn,arr.concat(args))
    }
}
const curry2=(fn,arr=[])=>arr.length===fn.length?fn(...arr):(...args)=>curry2(fn,[...arr,...args])






