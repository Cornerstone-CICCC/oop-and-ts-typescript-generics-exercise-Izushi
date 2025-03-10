// 5. Create a generic arrow function called `filterArray` that filters an array based on a callback function.
// Pass an array of numbers [1, 2, 3, 4, 5] and filter for numbers greater than 2.
// Log the filtered array.

const filterArray = <T>(arr: T[], callback: (n: T) => T): T[] => arr.filter(callback);

console.log(filterArray([1, 2, 3, 4, 5], (n: T) => n > 2)); // Expected output: [3, 4, 5]