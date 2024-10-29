// Equalize the Array
// https://www.hackerrank.com/challenges/equality-in-a-array/problem

function equalizeArray(arr) {
    // Write your code here
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1);
        }
    }
    
    let max = 0;
    map.forEach((value, key) => {
        if (value > max) {
            max = value;
        }
    })
    
    return arr.length - max;
}