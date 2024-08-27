var ProductArray = function (nums) {
  let res = [];
  let start = 1;
  for (let i = 0; i < nums.length; i++) {
    res.push(start);
    start = start * nums[i];
  }
  let start2 = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] = start2 * res[i];
    start2 = start2 * nums[i];
  }
  return res;
};
console.log(ProductArray([1, 2, 3, 4]));
/*
Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/
