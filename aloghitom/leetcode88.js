var merge = function (nums1, m, nums2, n) {
    while (n > 0 && m > 0) {
        if (nums1[m - 1] > nums2[n - 1]) {
            nums1[n + m - 1] = nums1[m - 1];
            m--;
        } else {
            nums1[n + m - 1] = nums2[n - 1];
            n--;
        }
    }
    for (int i = 0; i < n; i++) {
        nums1[i] = nums2[i];
    }
}
