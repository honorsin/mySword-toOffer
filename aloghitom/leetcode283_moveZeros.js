 function solution(nums) {
     let k = 0;
     for (let i = 0; i < nums.length; i++) {
         if (nums[i] !== 0) {
             if(i !== k) {
                [nums[k], nums[i]] = [nums[i], nums[k]]
                k++
             } else {
                k++
             }
           
         }
     }
 }
nums.sort((a, b) => (b === 0? -1: 1))