

const permute = (nums) => {
    const result = [];
    const recrusion = (path, set) => {
        //满足条件 回溯结束
        if (path.length === nums.length) {
            result.push(path.concat());
            return
        }
        for (let i = 0; i < nums.length; i++) {
            //判断没有重复
            if (!set.has(i)) {
                path.push(nums[i]);
                set.add(i);

                recrusion(path, set);
                //撤销选择
                path.pop();
                set.delete(i);
            }
        }
    }
    recrusion([], new Set);
    return result
}

recrusion = (arr) => {
    const result = []
    subRecrussions(path, set) => {
        if (path.length === arr.length) {
            result.push(path)
        }
        for (let i = 0; i < arr.length; i++) {
            if (!set.has(i)) {
                path.push(arr[i])
                set.add(i)

                subRecrussions(path, set)
                path.pop();
                set.delete(i)
            }
        }
    }

}