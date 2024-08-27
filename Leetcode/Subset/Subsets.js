// Leetcode :- 78
// Time complexity :- O(N^2)
// Space Complexity :- O(N)
var subsets = function (nums) {
  let result = [[]];
  function dfs(index, current) {
    for (let i = index; i < nums.length; i++) {
      current.push(nums[i]);
      result.push([...current]);
      dfs(i + 1, current);
      // Backtrack
      current.pop();
    }
  }
  dfs(0, []);
  return result;
};
console.log(subsets([1, 2, 3]));
console.log("Output 2:-");
console.log(subsets([1]));
