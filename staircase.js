// Staircase
// https://www.hackerrank.com/challenges/staircase/problem

function staircase(n) {
    // Write your code here
    for (let i = n - 1; i >= 0; i--) {
        let line = "";
        for (let j = 0; j < i; j++) {
            line = line + " ";
        }
        for (let j = i + 1; j <= n; j++) {
            line = line + "#";
        }
        console.log(line);
    }
}