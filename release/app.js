"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puzzles_json_1 = __importDefault(require("./puzzles.json"));
let filtered1 = puzzles_json_1.default.puzzles.filter((puzzle) => {
    if (puzzle.keyRange.startsWith('1'))
        return puzzle;
});
let filtered2 = puzzles_json_1.default.puzzles.filter((puzzle) => {
    if (puzzle.keyRange.startsWith('2'))
        return puzzle;
});
let filtered4 = puzzles_json_1.default.puzzles.filter((puzzle) => {
    if (puzzle.keyRange.startsWith('4'))
        return puzzle;
});
let filtered8 = puzzles_json_1.default.puzzles.filter((puzzle) => {
    if (puzzle.keyRange.startsWith('8'))
        return puzzle;
});
filtered1.forEach(puzzle => {
    puzzle.privateKey = puzzle.privateKey.replace('0', '');
});
filtered2.forEach(puzzle => {
    puzzle.privateKey = puzzle.privateKey.replace('0', '');
});
filtered4.forEach(puzzle => {
    puzzle.privateKey = puzzle.privateKey.replace('0', '');
});
filtered8.forEach(puzzle => {
    puzzle.privateKey = puzzle.privateKey.replace('0', '');
});
console.table(filtered1);
console.table(filtered2);
console.table(filtered4);
console.table(filtered8);
//# sourceMappingURL=app.js.map