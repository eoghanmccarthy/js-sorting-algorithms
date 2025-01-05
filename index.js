// Bubble Sort
export function bubbleSort(arr) {
    // Create a copy of array to avoid modifying original
    const array = [...arr];
    let n = array.length;
    let swapped;

    // Keep passing through array until no swaps needed
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            // If item is bigger than next item, swap them
            if (array[i] > array[i + 1]) {
                // Swap elements
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                // Track that we made a swap
                swapped = true;
            }
        }
        // Reduce loop bound since largest element bubbled to end
        n--;
    } while (swapped);
    return array;
}

// Selection Sort
export function selectionSort(arr) {
    // Create a copy of array to avoid modifying original
    const array = [...arr];
    let n = array.length;

    // Single pass through array from left to right - each position will get its final sorted value
    for (let i = 0; i < n - 1; i++) {
        // Everything to the right of i is the unsorted region. Find its minimum element.
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element of the unsorted region
        if (minIndex !== i) {
            let temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }

    return array;
}

// Insertion Sort
export function insertionSort(arr) {
    // Create a copy of array to avoid modifying original
    const array = [...arr];
    let n = array.length;

    for (let i = 1; i < n; i++) {
        // Store current element to be inserted in sorted portion
        let key = array[i];
        let j = i - 1;

        // Keep moving elements right while they're bigger than key
        // This creates space to insert the key in correct position
        while (j >= 0 && array[j] > key) {
            // Shift element right
            array[j + 1] = array[j];
            // Move to next element to compare
            j = j - 1;
        }

        // Place key in the correct position in sorted portion
        array[j + 1] = key;
    }

    return array;
}

// Merge Sort
export function mergeSort(arr) {
    // Base case: if array has 0 or 1 elements, it's already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Find middle point to divide array into two halves
    // Bitwise right shift by 1 is equivalent to division by 2 but faster
    const mid = arr.length >> 1;
    // Split array into left and right halves
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // None of the outer recursive functions can complete until their inner recursive calls are done.
    // They all finish in rapid succession once the innermost recursion (the base case) is reached.
    // This is why we don't need a result array - each recursive call returns its own sorted portion
    // that gets merged up the chain

    // Recursively sort both halves and combine them
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from both arrays and add smaller one to result
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            // Move to next element in left array
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            // Move to next element in right array
            rightIndex++;
        }
    }

    // Add any remaining elements from both arrays
    // If one array is exhausted, concat adds remaining elements from the other
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Quick Sort
export function quickSort(arr) {
    // Base case: if array has 1 or 0 elements, it's already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Choose a pivot element from middle of array
    let pivot = arr[Math.floor(arr.length / 2)];
    // Arrays to hold elements less than and greater than pivot
    let left = [];
    let right = [];

    // Partition array around pivot
    for (let i = 0; i < arr.length; i++) {
        // Skip the pivot element itself
        if (i !== Math.floor(arr.length / 2)) {
            if (arr[i] < pivot) {
                // Elements less than pivot go to left array
                left.push(arr[i]);
            } else {
                // Elements greater than or equal go to right array
                right.push(arr[i]);
            }
        }
    }

    // None of the outer recursive functions can complete until their inner recursive calls are done.
    // They all finish in rapid succession once the innermost recursion (the base case) is reached.
    // This is why we don't need a result array - each recursive call returns its own sorted portion
    // that gets merged up the chain

    // Recursively sort left and right arrays and combine with pivot
    // The recursion won't return until all nested calls complete
    return quickSort(left).concat(pivot, quickSort(right));
}
