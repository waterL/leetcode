var longestPalindrome = function (s) {
    var len = s.length
    var longest = {
        val: '',
        len: 0
    }
    if (len === 0 || len === 1) return s
    for (var end = 0; end < len; end++) {
        var curr = s[end]
        var index = s.indexOf(curr, end + 1)
        var i = index
        while (i > -1) {
            i = s.indexOf(curr, i + 1)
            if (i > -1) {
                index = i
            }
        }
        if (longest.len < (index + 1 - end)) {
            longest = {
                val: s.substring(end, index + 1),
                len: index + 1 - end
            }
        }
    }
    if (longest.len === 0) {
        return s[0]
    } else {
        return longest.val
    }
};
const s = 'cccccc'
console.log(longestPalindrome(s))