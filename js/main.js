const pawnOne = document.getElementById('e2')
const pawnTwo = document.getElementById('e7')
const bishop = document.getElementById('Bf1')
const knightOne = document.getElementById('Nb8')
const queen = document.getElementById('Qd1')
const knightTwo = document.getElementById('Ng8')
const pawnThree = document.getElementById('f7')

const mainBtn = document.querySelector('.main__btn')

const animation1 = () => pawnOne.style.animationName = 'move-one'
const animation2 = () => pawnTwo.style.animationName = 'move-two'

const startAnimation = () => {
    animation1()
    animation2()
}

mainBtn.addEventListener('click', startAnimation)
