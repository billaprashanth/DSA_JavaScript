// leetcode - 49
groupAnagrams = function groupAnagrams(strs) {
  let sorted = strs.map((str) => str.split("").sort().join("")); // Alphabets sorted => [ 'aet', 'aet', 'ant', 'aet', 'ant', 'abt' ]
  const map = {};
  for (let i = 0; i < strs.length; i++) {
    if (!map[sorted[i]]) {
      map[sorted[i]] = [strs[i]];
    } else {
      map[sorted[i]].push(strs[i]);
    }
  }
  return Object.values(map);
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log("Output - 2");
console.log(groupAnagrams([""]));
/*
Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
*/
