// https://www.hackerrank.com/challenges/diagonal-difference/problem
/* 
    Given a square matrix (2d array) of integers Calculate the absolute difference between the sums of its diagonals
    The absolute difference between two variables, is simply one subtracted from the other and you get the sum.
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
];
const expected1 = 2;
/* 
    left to right diagonal: 1 + 5 + 9 = 15
    right to left diagonal: 3 + 5 + 9 = 17
    absolute difference = 2
*/

const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];
const expected2 = 0;
/* 
    left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
    right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
    absolute difference = 0
*/

/**
 * Calculates the absolute diagonal difference of a square matrix.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
 *    a square matrix (rows and columns).
 * @returns {number} Represents the absolute difference between the top left to
 *    bottom right diagonal and the top right to bottom left diagonal.
 */
function diagonalDifference(sqrMatrix) {
    let sum = 0
    for (let j = 0; j < sqrMatrix[0].length; j++) {
        sum+=sqrMatrix[j][j]
        sum-=sqrMatrix[j][(sqrMatrix[0].length-1)-j]
    }
    return Math.abs(sum);
}

//calculate the absolute difference of the left to the right using recursion
function diagonalDifference2(sqrMatrix, sum = 0, j = 0) {
    if (j >= sqrMatrix[0].length) {
        return Math.abs(sum);
    }
    sum += sqrMatrix[j][j];
    sum -= sqrMatrix[j][(sqrMatrix[0].length - 1) - j];
    return diagonalDifference2(sqrMatrix, sum, j + 1);
}
/*****************************************************************************/

console.log(diagonalDifference(squareMatrix1));
console.log(diagonalDifference(squareMatrix2));
console.log(diagonalDifference2(squareMatrix1));
console.log(diagonalDifference2(squareMatrix2));