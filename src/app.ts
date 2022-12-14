import diffToPrev from './diffToPrev';
import filterOutZeros from './filterOutZeros';
import Puzzles from './puzzles.json';

let filtered1 = Puzzles.puzzles.filter( (puzzle) => {
    if(puzzle.keyRange.startsWith('1')) return puzzle;
})
let filtered2 = Puzzles.puzzles.filter( (puzzle) => {
    if(puzzle.keyRange.startsWith('2')) return puzzle;
})
let filtered4 = Puzzles.puzzles.filter( (puzzle) => {
    if(puzzle.keyRange.startsWith('4')) return puzzle;
})
let filtered8 = Puzzles.puzzles.filter( (puzzle) => {
    if(puzzle.keyRange.startsWith('8')) return puzzle;
})

//The reason we use multiple puzzles as input in the coming functions is because of the way we split the puzzles into "blocks" here.
//They would also work fine with just one input, if you decide not to filter the blocks beforehand.

//Include this to replace the leading zeros in the row "privateKey".
filterOutZeros(filtered1, filtered2, filtered4, filtered8)

//Include this if you want to show the difference to the previous keyRange private key block in a row called "diffToPrev"
diffToPrev(filtered1, filtered2, filtered4, filtered8)

console.table(filtered1)
console.table(filtered2)
console.table(filtered4)
console.table(filtered8)
