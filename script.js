//your JS code here. If required.
function secondHighest(arr) {
    if (arr.length <= 1) {
        return -Infinity;
    }

    // Remove duplicates and sort the array in descending order
    const uniqueSortedArr = [...new Set(arr)].sort((a, b) => b - a);

    // Check if all elements are the same
    if (uniqueSortedArr.length === 1) {
        return -Infinity;
    }

    // Return the second-highest element
    return uniqueSortedArr[1];
}

// Example cases
console.log(secondHighest([5, 1, 2, 3, 4]));  // Output: 4
console.log(secondHighest([-1, -2, -3, -4, -5]));  // Output: -2
console.log(secondHighest([]));  // Output: -Infinity
console.log(secondHighest([1]));  // Output: -Infinity
console.log(secondHighest([1, 1, 1, 1, 1]));  // Output: -Infinity
