function filtredSortedArray(arr) {
    const filteredArray = new Set(arr);
    const sorted = Array.from(filteredArray).sort((a, b) => a - b);

    return sorted;
};

const numbers = [2, 3, 1, 4, 7, 5, 5, 5, 6, 1, 2, 9, 4, 8, 4, 3, 7, 0];

const result = filtredSortedArray(numbers);

console.log(result);