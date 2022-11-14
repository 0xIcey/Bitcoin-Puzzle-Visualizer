import Puzzle from "../typings/puzzle";

export default function filterOutZeros(...AllPuzzles: Puzzle[][]){
    //I know this isn't ultra clean.. oh well, what a shame.
    AllPuzzles.forEach(Puzzles => {
        Puzzles.forEach((puzzle) => {
            puzzle.filteredPrivKey =  puzzle.privateKey.replace(/0/g, '');
        })
    })
   
}