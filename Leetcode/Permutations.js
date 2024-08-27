// Leetcode 46
const permute = function (nums, arr = [], res = []) {
  if (nums.length === 0) res.push([...arr]);
  for (let i = 0; i < nums.length; i++) {
    let rest = nums.filter((n, index) => index !== i);
    arr.push(nums[i]);
    // Recursive call
    permute(rest, arr, res);
    // backtrack
    arr.pop();
  }
  return res;
};
console.log(permute([1, 2, 3]));
