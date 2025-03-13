'use strict'
var gBoard = {

    minesAroundCount: 4,
    isCovered: true,
    isMine: false,
    isMarked: false
}
var gLevel = {
    SIZE: 4,
    MINES: 2
}
var gGame = {
    isOn: false,
    revealedCount: 0,
    markedCount: 0,
    secsPassed: 0
}