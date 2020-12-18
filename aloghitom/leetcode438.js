var findAnagrams = function(s, p) {
    let arr = [];
    for (let i = 0; i < p.length; i++){
        let index = s.indexOf(i)
        if (index !== -1) {
            arr.push(p.charAt(index))
        }
    }
};