// Picking Numbers
// https://www.hackerrank.com/challenges/three-month-preparation-kit-picking-numbers/problem

function pickingNumbers(a) {
    // Write your code here
    const map = new Map();
    for (let i = 0; i < a.length; i++) {
        if (map.has(a[i])) {
            map.set(a[i], map.get(a[i]) + 1);
        } else {
            map.set(a[i], 1);
        }
    }
    
    let res = 0;
    map.forEach((value, key) => {
        let temp1 = value;
        let temp2 = value;
        
        if (map.has(key - 1)) {
            temp1+= map.get(key - 1);
        }
        
        if (temp1 > res) {
            res = temp1;
        }
        
        if (map.has(key + 1)) {
            temp2+= map.get(key + 1);
        }
        
        if (temp2 > res) {
            res = temp2;
        }
    })
    
    return res;
}