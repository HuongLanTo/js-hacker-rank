// Minimum Loss
// https://www.hackerrank.com/challenges/minimum-loss/problem

function minimumLoss(price) {
    // Write your code here
    const priceWithIndices = price.map((value, index) => [value, index]);
    
    priceWithIndices.sort((a, b) => a[0] - b[0]);
    
    let res = Number.MAX_VALUE;
    for (let i = 1; i < priceWithIndices.length; i++) {
        const [curValue, curIndex] = priceWithIndices[i];
        const [preValue, preIndex] = priceWithIndices[i - 1];
        
        if (curIndex < preIndex) {
            res = Math.min(res, curValue - preValue);
        }
    }
    
    return res;
}