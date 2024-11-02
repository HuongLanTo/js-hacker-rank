// Plus Minus
// https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr) {
    // Write your code here
    let [pos, neg, zero] = [0, 0, 0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            pos++;
        } else if (arr[i] < 0) {
            neg++;
        } else {
            zero++;
        }
    }
    
    console.log((pos/arr.length).toFixed(6));
    console.log((neg/arr.length).toFixed(6));
    console.log((zero/arr.length).toFixed(6));
}