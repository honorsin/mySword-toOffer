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
    this.state = "pending"
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
Mypromise.prototype.then = function (onFulfilled, onRejected) {
    if (_this.state === Fulfilled) {
        typeof onFulfilled === 'function' && onFulfilled(this.value)
    }
    if (_this.state === Rejected) {
        typeof onRejected === 'function' && onRejected(this.reason)
    }
    if (_this.state === pending) {
        typeof onFulfilled === 'function' && this.onFulfilled.push(onFulfilled)
        typeof onRejected === 'function' && this.onRejected.push(onRejected)
    }
}


function del (node, preNode){
    preNode.next = node.next
    node.next = null
    return node 
}
//辅助函数，删除节点并返回

var partition = function(head, x) {
    if(!head || !head.next)return head
    let pre = head, post = head.next
    while(post){
        if(post.val < x){
            let n = del(post, pre)
            n.next = head   
            head = n
            post = pre.next
        }else{
            pre = post
            post = post.next
        }
    }
    return head
};

作者：eskimo6666
链接：https://leetcode-cn.com/problems/partition-list-lcci/solution/fen-ge-lian-biao-shuang-zhi-zhen-tou-cha-fa-by-esk/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。