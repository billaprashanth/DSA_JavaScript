function InsertionSort(nums) {
    for(let i = 1; i<nums.length-1;i++) {
        for(let j=i;j>=0;j--) {
            if(nums[j] < nums[j-1]) {
                [nums[j], nums[j-1]] = [nums[j-1], nums[j]];
            }
        }
    }
    return nums;
}
console.log(InsertionSort([7, 3, 6, 1, 9, 13]));
