var smiley = document.querySelector('#smiley')
var smileyStyle = smiley.style

var leftBtn = document.querySelector('#btn-left')
var rightBtn = document.querySelector('#btn-right')
var topBtn = document.querySelector('#btn-top')
var bottomBtn = document.querySelector('#btn-bottom')

leftBtn.addEventListener('click', function () {
    changeDirection('left')
})
rightBtn.addEventListener('click', function () {
    changeDirection('right')
})
topBtn.addEventListener('click', function () {
    changeDirection('top')
})
bottomBtn.addEventListener('click', function () {
    changeDirection('bottom')
})


var winOrLose = document.querySelector('#win-or-lose')
var winImg = 'img/winner.gif'
var loseImg = 'img/gameover.webp'

var coins = document.querySelectorAll('.coin')

var baseXminLimit = 0
var baseXmaxLimit = 860
var baseYminLimit = 0
var baseYmaxLimit = 560

var smileyX = 0
var smileyY = 0
var perSteps = 5
var time = 100
var direction
var point = 0

function checkGameOver() {

    if ((smileyX < baseXminLimit) || (smileyX > baseXmaxLimit) || (smileyY < baseYminLimit) || (smileyY > baseYmaxLimit)) {
        smileyStyle.display = 'none'
        winOrLose.setAttribute('src', loseImg)
    }
    return
}


let ary = [
    {
        x: 130,
        y: 30
    },

    {
        x: 610,
        y: 180
    },

    {
        x: 310,
        y: 310
    },

    {
        x: 560,
        y: 460
    }
]

function getPoint() {
    if (ary[0].x === smileyX && ary[0].y === smileyY) {
        coins[0].style.display = 'none'
        point++
        document.querySelector('#point').innerText = point
    }

    if (ary[1].x === smileyX && ary[1].y === smileyY) {
        coins[1].style.display = 'none'
        point++
        document.querySelector('#point').innerText = point
    }

    if (ary[2].x === smileyX && ary[2].y === smileyY) {
        coins[2].style.display = 'none'
        point++
        document.querySelector('#point').innerText = point
    }

    if (ary[3].x === smileyX && ary[3].y === smileyY) {
        coins[3].style.display = 'none'
        point++
        document.querySelector('#point').innerText = point
    }

    if (document.querySelector('#point').innerText == 4){
        smileyStyle.display = 'none'
        winOrLose.setAttribute('src', winImg)
    }

}

function changeDirection(dir) {
    direction = dir
}

setInterval(game, time)

function game() {

    checkGameOver()
    getPoint()

    if (direction == 'left') {
        smileyX = smileyX - perSteps
        smileyStyle.left = smileyX + 'px'
    } else if (direction == 'right') {
        smileyX = smileyX + perSteps
        smileyStyle.left = smileyX + 'px'
    } else if (direction == 'top') {
        smileyY = smileyY - perSteps
        smileyStyle.top = smileyY + 'px'
    } else if (direction == 'bottom') {
        smileyY = smileyY + perSteps
        smileyStyle.top = smileyY + 'px'
    }

}
