// Leetcode - 3
// Longest substring without repeating the characters
var LongestSubstring = function LongestSubstring(s) {
    const set = new Set();
    let longestString = 0;
    // Sliding window Technique
    let left = 0;
    let right = 0;
    while(right < s.length) {
        let letter = s[right];
        if(!set.has(letter)) {
            set.add(letter);
            longestString = Math.max(longestString, set.size);
            right++;
        } else {
            set.delete(s[left]);
            left++;
        }
    }
    return longestString;
};
console.log(LongestSubstring("abcabcbb"));

/**
 Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
 */
