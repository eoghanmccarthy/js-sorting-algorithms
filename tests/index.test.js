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
});
