const { func } = require("prop-types");
const { config } = require("yargs");

function breakInteger(value) {
    if (n === 1) {
        return 1
    }
    if (memo[n] !== -1) {
        return memo[n];
    }
    let res = -1;
    for (let i = 0; i < n; i++) {
        res = Math.max(res, i * (n - i), i * breakInteger(n - i))
    }
    memo[n] = res;
    return res
}

function integerBreak(n) {
    memo = {}
    return breakInteger(n)
}

function newObject(ctr) {
    let obj = {}
    obj._proto_ = ctr.prototype
    ctr.apply(obj)
    return obj
}
let arr = [1, 2, 3, 3, 4, 4, 11, 12, 5, 6, 7, 8, 9]
console.log([... new Set(arr)])

function A() {
    var S = 0;
    function B() {
        alert(++S);
    }
    return B;
}
var C = A();
C()
C()
