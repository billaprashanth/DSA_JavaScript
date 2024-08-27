// Combination- 77
// Output:- [ [ 1, 2 ], [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ], [ 3, 4 ] ]
var combination = function (n, k) {
  let result = [];
  function dfs(index, current) {
    // base case
    if (current.length == k) {
      result.push([...current]);
    }
    for (let i = index; i <= n; i++) {
      current.push(i);
      // recursive call
      dfs(i + 1, current);
      // backtrack
      current.pop();
    }
  }
  dfs(1, []);
  return result;
};
console.log(combination(4, 2));
