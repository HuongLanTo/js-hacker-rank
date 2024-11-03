// Diagonal Difference
// https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference(arr) {
    // Write your code here
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;
    for (let i = 0; i < arr.length; i++) {
        primaryDiagonal+= arr[i][i];
        secondaryDiagonal+= arr[i][arr.length - 1 - i];
    }
    
    return Math.abs(primaryDiagonal - secondaryDiagonal);
}