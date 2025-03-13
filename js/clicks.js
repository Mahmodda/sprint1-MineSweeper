'use strict'

function onCellClicked(elCell, i, j) {
    
    if (elCell.innerText === LIFE) {
        
        // UPDATE THE MODEL
        gBoard[rowIdx][colIdx] = SUPER_LIFE
        
        // UPDATE THE DOM
        elCell.innerText = SUPER_LIFE
    }
    
}
console.log('elCell:', elCell)
console.log('rowIdx:', rowIdx)
console.log('colIdx:', colIdx)
function blowUpNegs(rowIdx, colIdx) {

}

function onCellMarked(elCell) {

}
function expandReveal(board, elCell, i, j) {


}

