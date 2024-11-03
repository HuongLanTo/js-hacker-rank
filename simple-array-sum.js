// Simple Array Sum
// https://www.hackerrank.com/challenges/simple-array-sum/problem

function simpleArraySum(ar) {
    // Write your code here
    let res = 0;
    for (let i = 0; i < ar.length; i++) {
        res+= ar[i];
    }
    
    return res;
}