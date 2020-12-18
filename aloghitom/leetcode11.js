var maxArea = function (height) {
    let i = 0;
    let j = height.length - 1;
    let max = 0;
    let area = 0
    while (i < j) {
        if (height[i] > height[j]) {
            area = (j - i) * height[j];
            j--;
        } else {
            area = (j - i) * height[i];
            i++;
        }
        if (area > max) {
            max = area;
        }
    }
    return max
};