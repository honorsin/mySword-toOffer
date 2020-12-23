const { func } = require("prop-types");

function Promise {
    var _this = this
    this.state = PENDING; //状态
    this.value = undefined; //成功结果
    this.reason = undefined; //失败原因

    this.onFulfilled = [];//成功的回调
    this.onRejected = [];
    function resolve(value) {
        if (_this.state === PENDING) {
            _this.state = FULFILLED
            _this.value = value
            _this.onFulfilled.forEach(fn => fn(value))
        }
    }
    function reject(reason) {
        if (_this.state === PENDING) {
            _this.state = REJECTED
            _this.reason = reason
            _this.onRejected.forEach(fn => fn(reason))
        }
    }
    try {
        executor(resolve, reject);
    } catch (e) {
        reject(e);
    }
}
Promise.prototype.then = function (onFulfilled, onRejected) {
    if (this.state === FULFILLED) {
        typeof onFulfilled === 'function' && onFulfilled(this.value)
    }
    if (this.state === REJECTED) {
        typeof onRejected === 'function' && onRejected(this.reason)
    }
    if (this.state === PENDING) {
        typeof onFulfilled === 'function' && this.onFulfilled.push(onFulfilled)
        typeof onRejected === 'function' && this.onRejected.push(onRejected)
    }
};

function Mypromise() {
    this.state = "pendings"
    this.value = undefined
    this.reason = undefined
    this.resolveCallbacks = [];
    this.rejectCallbacks = [];

    const resolve = (value) => {
        if (this.state = "pending") {
            this.state = "resolve"
            this.value = value
            this.resolveCallbacks.forEach(fn => fn(value))
        }
    }
    const reject = (reason) => {
        if (this.state = "pending") {
            this.state = "reject"
            this.value = reason
            this.rejectCallbacks.forEach(fn => fn(reason))
        }
    }
    try {
        executor(resolve, reject);
    } catch (e) {
        reject(e);
    }
}