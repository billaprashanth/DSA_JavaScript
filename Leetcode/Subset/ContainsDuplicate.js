function Duplicates(nums) {
  // Use set DataStructure to get unique values
  const set = new Set(nums);
  // To get the length in set we use => [size]
  return set.size !== nums.length;
}
console.log(Duplicates([1, 1, 2, 4, 5]));
console.log(Duplicates([1, 2, 4, 5]));

// Time complexity :- O(N)
// Space complexity :- O(N)
