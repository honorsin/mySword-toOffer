var twoSum = function(numbers, target) {
    //双指针
   let len = numbers.length;
   let left = 0;
   let right = len-1;
   while (left < right) {
       if (numbers[left] + numbers[right] == target) {
           return [left + 1, right + 1]
       } else if (numbers[left] + numbers[right] > target) {
           right--
       } else {
           left++;
       }
   }
};