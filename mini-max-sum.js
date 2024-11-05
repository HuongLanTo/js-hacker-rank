// Mini-Max Sum
// https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr) {
    // Write your code here
    let sum, max, min;
    sum = max = min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        sum+= arr[i];
        
        if (arr[i] > max) {
            max = arr[i];
        }
        
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    
    console.log(sum - max, sum - min);
}