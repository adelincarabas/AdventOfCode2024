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
             .split(delimiter);
}

/**
 * Solution for Part 1
 * @param {Array<string>} input - The input data.
 * @returns {number|string} - The solution for part 1.
 */
function solvePart1(input) {
    const regex = /mul\((\d+),(\d+)\)/g;
    let aFinalMultiplier = 0;

    let match;
    while ((match = regex.exec(input)) !== null) {
        aFinalMultiplier += parseInt(match[1]) * parseInt(match[2]);
    }
    return aFinalMultiplier
}

/**
 * Solution for Part 2
 * @param {Array<string>} input - The input data.
 * @returns {number|string} - The solution for part 2.
 */
function solvePart2(input) {
    const regex = /mul\((\d+),(\d+)\)|don't\(\)|do\(\)/g;
    let aFinalMultiplier = 0;
    let enabled = true;

    let match;
    while ((match = regex.exec(input)) !== null) {
        switch (match[0]) {
            case 'do()':
                enabled = true;
                break;
            case 'don\'t()':
                enabled = false;
                break;
            default:
                if (enabled) aFinalMultiplier += parseInt(match[1]) * parseInt(match[2]);
        }
    }
    return aFinalMultiplier;
}

function main() {
    const inputFilePath = './input.txt';
    const input = readInput(inputFilePath);
    console.log(input)

    console.log('Part 1:', solvePart1(input));
    console.log('Part 2:', solvePart2(input));
}

main();