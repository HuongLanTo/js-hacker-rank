// Birthday Cake Candles
// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(candles) {
    // Write your code here
    let map = new Map();
    let max = candles[0];
    
    for (let i = 0; i < candles.length; i++) {
        if (map.has(candles[i])) {
            map.set(candles[i], map.get(candles[i]) + 1);
        } else {
            map.set(candles[i], 1);
        }
        
        if (candles[i] > max) {
            max = candles[i];
        }
    }
    
    return map.get(max);
}