var findMedianSortedArrays = function (nums1, nums2) {
    var arr = nums1.concat(nums2).sort((a, b) => a - b)
    var len = arr.length
    var len1 = parseInt(len / 2);
    console.log(len % 2)
    if (len % 2 == 0) {
        return (arr[len1] + arr[len1 - 1]) / 2
    } else {
        return arr[len1]
    }
};