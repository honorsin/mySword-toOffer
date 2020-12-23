var findAnagrams = function(s, p) {
    let arr = [];
    for (let i = 0; i < p.length; i++){
        let index = s.indexOf(i)
        if (index !== -1) {
            arr.push(p.charAt(index))
        }
    }
};

var findAnagrams = function(s, p) {
    if (!s || !p) return [];
    let need = {}, window = {}, ans = [];
    //确定异位词所需各字母个数
    [...p].forEach(c => need[c] ? need[c]++ : need[c] = 1);
    let l = 0, r = 0, cnt = 0, nkLen = Object.keys(need).length;
    while (r < s.length) {
        let c1 = s[r];
        if (need[c1]) {
            window[c1] ? window[c1]++ : window[c1] = 1;
            if (window[c1] === need[c1]) cnt++;
        }
        r++;
        while (cnt === nkLen) {
            let c2 = s[l];
            if ((r - l) == p.length) ans.push(l);
            if (need[c2]) {
                window[c2]--;
                if (window[c2] < need[c2]) cnt--;
            }
            l++;
        }
    }
    return ans;
};
