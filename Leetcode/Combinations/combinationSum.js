// Combination sum III - 216
// Time complexity :- O(a! / n! * (n-k))!
// Space Complexity :- O(n)
// Input :- k=3 , n=9
// 1+2+6 => 9, 1+3+5 => 9, 2+3+4 => 9
// Output:- [ [ 1, 2, 6 ], [ 1, 3, 5 ], [ 2, 3, 4 ] ]
var combinationSum = function (k, n) {
  let result = [];
  function dfs(index, current, total) {
    if (total < 0 || current.length > k) return;
    if (total === 0 && current.length === k) {
      result.push([...current]);
    }
    for (let i = index; i <= 9; i++) {
      current.push(i);
      // Recursive
      dfs(i + 1, current, total - i);
      // backtrack
      current.pop();
    }
  }
  dfs(1, [], n);
  return result;
};
console.log("Output:-1");
console.log(combinationSum(3, 7));
console.log("Output:-2");
console.log(combinationSum(3, 9));
