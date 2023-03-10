function rotateArray(arr, k) {
  // First, normalize k in range [0, arr.length)
  k = k % arr.length;

  // Reverse the 1st part of the array, up to k elements
  for (let i = 0, j = k - 1; i < j; i++, j--) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  // Reverse the 2nd part of the arr, from k to the end
  for (let i = k, j = arr.length - 1; i < j; i++, j--) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  // Reverse the entire array
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  // Return the rotated array
  return arr;
}

// Example usage:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const k = 3;
const rotatedArr = rotateArray(arr, k);
console.log(rotatedArr); // [4, 5, 6, 7, 8, 9, 10, 1, 2, 3]



