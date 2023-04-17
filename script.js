/*
 * Complete the 'insertionSort2' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY arr
 */

function insertionSort2(n, arr) {
    // Write your code here
    for(let i = 1; i < n; i++) {
        let curr = i;
        for(let j = i - 1; j >= 0; j--) {
            if(arr[curr] < arr[j]) {
                [arr[curr], arr[j]] = [arr[j], arr[curr]]
            }
            curr--;
        }
        console.log(...arr)
    }
}
