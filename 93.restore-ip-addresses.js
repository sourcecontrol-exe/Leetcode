/*
 * @lc app=leetcode id=93 lang=javascript
 *
 * [93] Restore IP Addresses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
function isValid(s) {
    if(s=="") return false;
    if (s.length == 1 && Number(s) >= 0) return true;
    if (s.length > 1) {
        if (s[0] == '0' || Number(s) < 0 || Number(s) > 255 ) return false
    }
    return true
}

var restoreIpAddresses = function (s) {
    if (s.length < 4 || s.length > 12) return [];

    let result = new Set();

    function dfs(index, ans, range) {
        if (range == 4) {
            if (isValid(s.slice(index, s.length))) {
                
                ans += "." + (s.slice(index, s.length));
                result.add(ans.slice(1,ans.length));
            }
            return
        }
        for (var i = 1; i < 4; i++) {
            let temp = s.slice(index, index + i);
            if (isValid(temp)) {
                dfs(index+i, ans+'.'+temp, range+1)
            }

        }
    }

    dfs(0, "", 1)
    return [...result];

};
// @lc code=end