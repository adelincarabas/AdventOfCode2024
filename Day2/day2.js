const fs = require('fs');

/**
 * Reads the input file and splits it into an array by lines or another delimiter.
 * @param {string} filePath - The path to the input file.
 * @param {string} delimiter - The delimiter used to split the input (default is '\n').
 * @returns {Array<string>} - The input data as an array of strings.
 */
function readInput(filePath, delimiter = '\n') {
    return fs.readFileSync(filePath, 'utf8')
        .trim()
        .split(delimiter).map(line => line.trimEnd());
}

/**
 * Solution for Part 1
 * @param {Array<string>} input - The input data.
 * @returns {number|string} - The solution for part 1.
 */
function solvePart1(input) {
    let iMax = 0;
    let bPlusValid = false;
    let bMinusValid = false;
    input = input.split(" ").map(Number);

    for (const y of input) {
        if (iMax !== 0) {
            const iDifference = y - iMax;

            if (iDifference > 0 && iDifference <= 3) {
                iMax = y;
                bPlusValid = true;
            } else if (iDifference < 0 && -iDifference <= 3) {
                iMax = y;
                bMinusValid = true;
            } else {
                bPlusValid = true;
                bMinusValid = true;
                break;
            }
        } else {
            iMax = y;
        }
    }
    if (bPlusValid !== bMinusValid) {
        return true;
    }
    return false;
}

function solveFirst(input) {
    let part1 = input.filter(solvePart1)
    return part1.length;
}

function solveSecond(input) {
    let part2 = input.filter(solvePart2)
    return part2.length;
}

/**
 * Solution for Part 2
 * @param {Array<string>} input - The input data.
 * @returns {number|string} - The solution for part 2.
 */
function solvePart2(input) {
    if (solvePart1(input)) {
        return true;
    }
    for (let i = 0; i < input.length; i++) {
        const subSet = input.split(" ").toSpliced(i, 1).join(" ");
        if (solvePart1(subSet)) {
            return true;
        }
    }
    return false;
}

function main() {
    const inputFilePath = './input.txt';
    const input = readInput(inputFilePath);

    console.log('Part 1:', solveFirst(input));
    console.log('Part 2:', solveSecond(input));
}

main();