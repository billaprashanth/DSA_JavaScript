function BubbleSort(nums) {
    for(let i=0; i<nums.length-1;i++) {
        for(let j=0;j<nums.length;j++) {
            if(nums[j] > nums[j+1]) {
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]];
            }
        }
    }
    return nums;
}
console.log(BubbleSort([7, 3, 6, 1, 9, 13]));
