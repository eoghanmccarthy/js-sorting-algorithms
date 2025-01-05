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
