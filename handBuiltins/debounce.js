
const debounce = (fn, delay) => {
    let timer = null;
    return () => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(fn, delay)
    }
}

const throttle = (fn, delay) => {
    let vaild = true;
    return () => {
        if (!vaild) {
            return false
        }
        valid = false;
        setTimeout(() => {
            fn()
            valid = true
        }, delay)
    }