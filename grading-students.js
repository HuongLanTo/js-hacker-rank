// Grading Students
// https://www.hackerrank.com/challenges/grading/problem

function gradingStudents(grades) {
    // Write your code here
    for (let i = 0; i < grades.length; i++) {
        let remainder = grades[i] % 5;
        let temp = grades[i];
        
        if (remainder >= 3) {
            temp = grades[i] + (5 - remainder);
        }
        
        if (temp >= 40) {
            grades[i] = temp;
        }
    }
    
    return grades;
}