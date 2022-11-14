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

filtered1.forEach(puzzle => {
    puzzle.privateKey = puzzle.privateKey.replace('0', '')
})
filtered2.forEach(puzzle => {
    puzzle.privateKey = puzzle.privateKey.replace('0', '')
})
filtered4.forEach(puzzle => {
    puzzle.privateKey = puzzle.privateKey.replace('0', '')
})
filtered8.forEach(puzzle => {
    puzzle.privateKey = puzzle.privateKey.replace('0', '')
})

console.table(filtered1)
console.table(filtered2)
console.table(filtered4)
console.table(filtered8)

