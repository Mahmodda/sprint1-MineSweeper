'use strict'

function onInit() {

}
buildBoard()
    function buildBoard() {
        const size = 10
        const board = []
    
        for (var i = 0; i < size; i++) {
            board.push([])
    
            for (var j = 0; j < size; j++) {
                board[i][j] = 
                gGame.t++
                if (i === 0 || i === size - 1 ||
                    j === 0 || j === size - 1 ||
                    (j === 3 && i > 4 && i < size - 2)) {
                    
                    
                }
            }
        }
        (board)
        return board
    }
    console.log(buildBoard)
    

function setMinesNegsCount(board) {

}
function renderBoard(board) {
    var strHTML = ''
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < board[0].length; j++) {

            const cell = board[i][j]
            const className = `cell cell-${i}-${j}`

            strHTML += `<td class="${className}">
                            ${cell}
                        </td>`
        }
        strHTML += '</tr>'
    }
    const elContainer = document.querySelector('.board')
    elContainer.innerHTML = strHTML

}