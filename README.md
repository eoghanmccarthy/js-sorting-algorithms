# JavaScript Sorting Algorithms

![Tests](https://github.com/eoghanmccarthy/js-sorting-algorithms/actions/workflows/test.yml/badge.svg)

A comprehensive collection of sorting algorithm implementations in JavaScript with full test coverage.

## 🚀 Features

- **5 Classic Sorting Algorithms**: Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, and Quick Sort
- **Immutable Operations**: All functions return new arrays without modifying the original
- **Comprehensive Tests**: Full test suite using Bun's testing framework
- **Automated CI/CD**: GitHub Actions workflow for continuous testing
- **Well Documented**: Clear comments explaining algorithm logic

## 📋 Algorithms Included

| Algorithm | Time Complexity (Best) | Time Complexity (Average) | Time Complexity (Worst) | Space Complexity |
|-----------|------------------------|----------------------------|--------------------------|------------------|
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) |
| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) |
| Insertion Sort | O(n) | O(n²) | O(n²) | O(1) |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) |

## 🛠️ Usage

```javascript
import { bubbleSort, selectionSort, insertionSort, mergeSort, quickSort } from './index.js';

const unsortedArray = [5, 3, 4, 1, 2];

console.log(bubbleSort(unsortedArray));    // [1, 2, 3, 4, 5]
console.log(selectionSort(unsortedArray)); // [1, 2, 3, 4, 5]
console.log(insertionSort(unsortedArray)); // [1, 2, 3, 4, 5]
console.log(mergeSort(unsortedArray));     // [1, 2, 3, 4, 5]
console.log(quickSort(unsortedArray));     // [1, 2, 3, 4, 5]

// Original array remains unchanged
console.log(unsortedArray); // [5, 3, 4, 1, 2]
```

## 🧪 Testing

Run tests locally with Bun:

```bash
# Install dependencies
bun install

# Run tests once
bun test

# Run tests in watch mode
bun run test:watch
```

## 🔄 Continuous Integration

This project uses GitHub Actions to automatically run tests on every push and pull request. The workflow:

1. Sets up the latest version of Bun
2. Installs dependencies
3. Runs the complete test suite
4. Reports results

## 📈 Algorithm Performance Notes

- **Bubble Sort**: Simple but inefficient. Good for educational purposes.
- **Selection Sort**: Consistent O(n²) performance regardless of input.
- **Insertion Sort**: Excellent for small datasets or nearly sorted arrays.
- **Merge Sort**: Guaranteed O(n log n) performance, stable sort.
- **Quick Sort**: Generally fastest for random data, but can degrade to O(n²).

## 🤝 Contributing

Feel free to submit issues, fork the repository, and create pull requests for any improvements.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
