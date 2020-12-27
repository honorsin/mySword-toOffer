class evenrHub {
    cache = {}
    on(eventName, fn) {
        this.cache[eventName] = this.cache[eventName] || [];
        this.cache[eventName].push(fn);
    }
    emit(eventName, fn) {
        this.cache[eventName].forEach((fn) => fn());
    }
    off(eventName, fn) {
        const index = this.cache[eventName].indexOf(fn); // 这里用 this.cache[eventName].indexOf(fn) 完全可以，封装成函数是为了向下兼容
        if (index === -1) return;
        this.cache[eventName].splice(index, 1);
    }
}