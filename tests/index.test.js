import { expect, describe, it, beforeEach } from "bun:test";
import { bubbleSort, selectionSort, insertionSort, mergeSort, quickSort } from "../index";

describe("Sorting algorithms", () => {
    let arr;

    beforeEach(() => {
        arr = [5, 3, 4, 1, 2];
    });

    describe("bubbleSort", () => {
        it("should sort the array in ascending order", () => {
            expect(bubbleSort(arr)).toEqual([1, 2, 3, 4, 5]);
        });

        it("should not mutate the original array", () => {
            bubbleSort(arr);
            expect(arr).toEqual([5, 3, 4, 1, 2]);
        });
    });

    describe("selectionSort", () => {
        it("should sort the array in ascending order", () => {
            expect(selectionSort(arr)).toEqual([1, 2, 3, 4, 5]);
        });

        it("should not mutate the original array", () => {
            selectionSort(arr);
            expect(arr).toEqual([5, 3, 4, 1, 2]);
        });
    });

    describe("insertionSort", () => {
        it("should sort the array in ascending order", () => {
            expect(insertionSort(arr)).toEqual([1, 2, 3, 4, 5]);
        });

        it("should not mutate the original array", () => {
            insertionSort(arr);
            expect(arr).toEqual([5, 3, 4, 1, 2]);
        });
    });

    describe("mergeSort", () => {
        it("should sort the array in ascending order", () => {
            expect(mergeSort(arr)).toEqual([1, 2, 3, 4, 5]);
        });

        it("should not mutate the original array", () => {
            mergeSort(arr);
            expect(arr).toEqual([5, 3, 4, 1, 2]);
        });
    });

    describe("quickSort", () => {
        it("should sort the array in ascending order", () => {
            expect(quickSort(arr)).toEqual([1, 2, 3, 4, 5]);
        });

        it("should not mutate the original array", () => {
            quickSort(arr);
            expect(arr).toEqual([5, 3, 4, 1, 2]);
        });
    });

    // New performance comparison test
    describe("performance with larger datasets", () => {
        it("should handle arrays of 100 elements", () => {
            const largeArray = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000));
            const expected = [...largeArray].sort((a, b) => a - b);

            expect(mergeSort(largeArray)).toEqual(expected);
            expect(quickSort(largeArray)).toEqual(expected);
            // Skip bubble, selection, insertion for large arrays as they're O(n²)
        });

        it("should handle edge cases", () => {
            expect(bubbleSort([])).toEqual([]);
            expect(bubbleSort([1])).toEqual([1]);
            expect(mergeSort([3, 3, 3])).toEqual([3, 3, 3]);
            expect(quickSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
        });
    });
});
