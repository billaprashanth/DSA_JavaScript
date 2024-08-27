function QuickSort(arr) {
    if(arr.length <= 1) return arr;
    let leftArr = [];
    let rightArr = [];
    let pivot = arr[arr.length-1];
    // To push the elements to leftArr and RightArr
    for(let i =0;i<arr.length-1;i++) {
        if(arr[i] < pivot) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }
    // Divide and conquer 
    if(leftArr.length > 0 && rightArr.length > 0) {
        return [...QuickSort(leftArr), pivot, ...QuickSort(rightArr)];
    } else if(leftArr.length > 0) {
        return [...QuickSort(leftArr), pivot];
    } else {
        return [pivot, ...QuickSort(rightArr)];
    }
    return arr;
}
console.log(QuickSort([7, 3, 6, 1, 9, 13]));