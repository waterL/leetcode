var lengthOfLongestSubstring = function (s) {
    var arr = [],
        txt = '',
        num = 0,
        maxLength = 0;
    for (var i = 0; i < s.length; i++) {
        var nowTXt = s[i]
        var index = txt.indexOf(nowTXt)
        if (index > -1) {
            txt = txt.substring(index + 1);
            num = txt.length
        }
        num++
        txt += nowTXt
        if (num > maxLength) {
            maxLength = num
        }
    }
    return maxLength
};