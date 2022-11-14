import Puzzle from "../typings/puzzle";

export default function diffToPrev(...AllPuzzles: Puzzle[][]){
    //I know this isn't very clean either.. oh well, what a shame.
    AllPuzzles.forEach(Puzzles => {
        Puzzles.forEach((puzzle, index) => {

            //If the prevous index at -1 does not exist, then it is the first of the keyrange, and therefor has no diff to before.    
            const previousKeyrangePuzzle = Puzzles[index - 1];
            
            if(!previousKeyrangePuzzle){
                return;
            }
            
            if(!puzzle.privateKey) puzzle.privateKey = '0'; //Edge case for puzzle 66

            const thisPuzzlesPrivateKey = BigInt('0x' + puzzle.privateKey)
            const previousPuzzlesPrivateKey = BigInt('0x' + previousKeyrangePuzzle.privateKey)
            const difference = thisPuzzlesPrivateKey - previousPuzzlesPrivateKey;
            

            puzzle.diffToPrev = difference.toString(16)

        })
    })
   
}