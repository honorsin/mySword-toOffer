var reverseVowels = function(s) {
    let set = new Set(['a','e','i','o','u','A','E','I','O','U']);
    let arr = s.split('')
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        if ( set.has(arr[left])){
            if(set.has(arr[right])){ 
                [arr[left],arr[right]] = [arr[left],arr[right]];
                left++;
            }
            right--;
        } else {
            left++
        }
    }
    return arr.join('');
}