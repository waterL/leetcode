var lengthOfLongestSubstring = function (s) {
    var arr = [],
        txt = '',
        num = 0
    for (var i = 0; i < s.length; i++) {
        var nowTXt = s[i]
        var index = txt.indexOf(nowTXt)
        if (index > -1) {
            if (arr.indexOf(num) < 0) arr.push(num)
            var surTxt = txt.split(nowTXt)[1]
            txt = surTxt + nowTXt
            num = txt.length
        } else {
            num++
            txt += nowTXt
        }
    }
    arr.push(txt.length)
    arr = arr.sort((a, b) => b - a)
    return arr[0]
};