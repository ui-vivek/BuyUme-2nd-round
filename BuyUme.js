// Define the array and the number of rotations
const arr = [1,2,3,4,5,6,7,8,9,10];
const k = 3;

// Perform K rotations
for (let i = 0; i < k; i++) {
  // Remove the last element of the array and save it
  const lastElement = arr[arr.length - 1];
  // Move all other elements one position to the right
  for (let j = arr.length - 1; j > 0; j--) {
    arr[j] = arr[j - 1];
  }
  // Put the last element at the beginning of the array
  arr[0] = lastElement;
}

// Print the rotated array
console.log(arr);

// Another way
// -------------------------------------------------------------

// function rotateArray(arr, k) {
//     const n = arr.length;
//     k = k % n; // ensure k is within range [0, n)
  
//     // reverse the first n-k elements
//     for (let i = 0, j = n - k - 1; i < j; i++, j--) {
//       [arr[i], arr[j]] = [arr[j], arr[i]]; // swap elements
//     }
  
//     // reverse the last k elements
//     for (let i = n - k, j = n - 1; i < j; i++, j--) {
//       [arr[i], arr[j]] = [arr[j], arr[i]]; // swap elements
//     }
  
//     // reverse the entire array
//     for (let i = 0, j = n - 1; i < j; i++, j--) {
//       [arr[i], arr[j]] = [arr[j], arr[i]]; // swap elements
//     }
  
//     return arr;
//   }
  
//   // example usage:
//   const arr = [1,2,3,4,5,6,7,8,9,10];
//   const arr2 = [11,12,13,14,15,16,17,18,19,10];
//   const k = 3;
//   const rotated = rotateArray(arr, k);
//   console.log(rotated); // [4,5,6,7,8,9,10,1,2,3]
  