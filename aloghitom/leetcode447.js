var numberOfBoomerangs = function(points) {
    let res = 0;
    for (let i = 0; i < points.length; i++) {
        const map = new Map();
        for (let j = 0; j < points.length; j++) {
            if (j != i) {
                const d = dis(points[i], points[j])
                if (map.has(d)) {
                    map.set(d, map.get(d) + 1)
                } else {
                    map.set(d, 1)
                }
            }
        }
        map.forEach((val, key) => {
            res = res + val * (val-1)
        })
    }
   
    return res
}
function dis(a,b) {
    return (a[0] - b[0]) * (a[0] - b[0]) + (a[1] - b[1]) * (a[1] - b[1])
}