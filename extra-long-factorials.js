// Extra Long Factorials
// https://www.hackerrank.com/challenges/extra-long-factorials/problem

function extraLongFactorials(n) {
    // Write your code here
    let res = BigInt(1);
    for (let i = 2; i <= n; i++) {
        res*= BigInt(i);
    }
    
    console.log(res.toString());
}