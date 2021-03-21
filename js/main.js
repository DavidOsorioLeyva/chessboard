let startButton = document.getElementById('start')
let pawnOne = document.getElementById('pawn-one')
let pawnTwo = document.getElementById('pawn-two')
let bishopOne = document.getElementById('bishop-one')
let horseOne = document.getElementById('horse-one')
let queenOne = document.getElementById('queen-one')
let horseTwo = document.getElementById('horse-two')
let pawnThree = document.getElementById('pawn-three')
let space1 = document.querySelector('.horse__space')
let space2 = document.querySelector('.space__horse__two')

const animation1 = () => pawnOne.style.transform = 'translateY(-200%)'

const animation2 = () => pawnTwo.style.transform = 'translateY(200%)'

const animation3 = () => bishopOne.style.transform = 'translate(-300%, -300%)'

const animation4 = () => {
    horseOne.style.transform = 'translate(100%, 200%)'
    space1.classList.add('wht-c')
}

const animation5 = () => queenOne.style.transform = 'translate(400%, -400%)'

const animation6 = () => {
    horseTwo.style.transform = 'translate(-100%, 200%)'
    space2.classList.remove('wht-c')
    space2.classList.add('blck-c')
}

const animation7 = () => {
    queenOne.style.transform = 'translate(200%, -600%)'
    pawnThree.style.display = 'none'
}

const startAnimation = () => {
    setTimeout(animation1, 500)
    setTimeout(animation2, 1500)
    setTimeout(animation3, 2500)
    setTimeout(animation4, 3500)
    setTimeout(animation5, 4500)
    setTimeout(animation6, 5500)
    setTimeout(animation7, 6500)
}

startButton.addEventListener('click', startAnimation)
