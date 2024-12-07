const fs = require('fs');

/**
 * Reads the input file and splits it into an array by lines or another delimiter.
 * @param {string} filePath - The path to the input file.
 * @param {string} delimiter - The delimiter used to split the input (default is '\n').
 * @returns {Array<string>} - The input data as an array of strings.
 */
function readInput(filePath, delimiter = '\n') {
    return fs.readFileSync(filePath, 'utf8')
}

/**
 * Solution for Part 1
 * @param {Array<string>} input - The input data.
 * @returns {number|string} - The solution for part 1.
 */
function solvePart1(input) {
    const lines = input.replace(/\r/g, "").split("\n").filter(y => y != "").map(y => y.split(""));
    let found = 0;
    for (let x = 0; x < lines.length; x++) {
        for (let y = 0; y < lines[x].length; y++) {
            if(lines[x][y] != "X") continue;

            if(x > 2){
                if(lines[x-1][y-1] == "M" && lines[x-2][y-2] == "A" && lines[x-3][y-3] == "S") found++;
                if(lines[x-1][y] == "M" && lines[x-2][y] == "A" && lines[x-3][y] == "S") found++;
                if(lines[x-1][y+1] == "M" && lines[x-2][y+2] == "A" && lines[x-3][y+3] == "S") found++;
            }

            if(x < lines.length - 3){
                if(lines[x+1][y-1] == "M" && lines[x+2][y-2] == "A" && lines[x+3][y-3] == "S") found++;
                if(lines[x+1][y] == "M" && lines[x+2][y] == "A" && lines[x+3][y] == "S") found++;
                if(lines[x+1][y+1] == "M" && lines[x+2][y+2] == "A" && lines[x+3][y+3] == "S") found++;
            }

            if (lines[x][y - 1] == "M" && lines[x][y - 2] == "A" && lines[x][y - 3] == "S") found++;
            if (lines[x][y + 1] == "M" && lines[x][y + 2] == "A" && lines[x][y + 3] == "S") found++;
        }
    }
    return found;
}

/**
 * Solution for Part 2
 * @param {Array<string>} input - The input data.
 * @returns {number|string} - The solution for part 2.
 */
function solvePart2(input) {
    const lines = input.replace(/\r/g, "").split("\n").filter(y => y != "").map(y => y.split(""));
    let found = 0;
    for (let x = 1; x < lines.length - 1; x++) {
        for (let y = 1; y < lines[x].length - 1; y++) {
            if(lines[x][y] != "A") continue;

            if(lines[x-1][y-1] == "M" && lines[x+1][y+1] == "S"){
                if(lines[x+1][y-1] == "M" && lines[x-1][y+1] == "S") found++;
                if(lines[x-1][y+1] == "M" && lines[x+1][y-1] == "S") found++;
                continue;
            }

            if(lines[x-1][y+1] == "M" && lines[x+1][y-1] == "S"){
                if(lines[x+1][y+1] == "M" && lines[x-1][y-1] == "S") found++;
                if(lines[x-1][y-1] == "M" && lines[x+1][y+1] == "S") found++;
                continue;
            }
            if (lines[x + 1][y - 1] == "M" && lines[x - 1][y + 1] == "S") {
                if (lines[x - 1][y - 1] == "M" && lines[x + 1][y + 1] == "S") found++;
                if (lines[x + 1][y + 1] == "M" && lines[x - 1][y - 1] == "S") found++;
                continue;
            }
            if (lines[x + 1][y + 1] == "M" && lines[x - 1][y - 1] == "S") {
                if (lines[x - 1][y + 1] == "M" && lines[x + 1][y - 1] == "S") found++;
                if (lines[x + 1][y - 1] == "M" && lines[x - 1][y + 1] == "S") found++;
                continue;
            }
        }
    }
    return found;
}

function main() {
    const inputFilePath = './input.txt';
    const input = readInput(inputFilePath);

    console.log('Part 1:', solvePart1(input));
    console.log('Part 2:', solvePart2(input));
}

main();