const pawnOne = document.getElementById('e2')
const pawnTwo = document.getElementById('e7')
const bishop = document.getElementById('Bf1')
const knightOne = document.getElementById('Nb8')
const queen = document.getElementById('Qd1')
const knightTwo = document.getElementById('Ng8')
const pawnThree = document.getElementById('f7')

const mainBtn = document.querySelector('.main__btn')

const startAnimation = () => {
    setTimeout(() => pawnOne.style.animationName = 'move-one', 200)
    setTimeout(() => pawnTwo.style.animationName = 'move-two', 1000)
    setTimeout(() => bishop.style.animationName = 'move-three', 1800)
    setTimeout(() => knightOne.style.animationName = 'move-four', 2600)
    setTimeout(() => queen.style.animationName = 'move-five', 3400)
    setTimeout(() => knightTwo.style.animationName = 'move-six', 4200)
    setTimeout(() => {
        queen.style.animationName = 'move-seven'
        pawnThree.style.animationName = 'hidden'
    }, 5000)
}

mainBtn.addEventListener('click', startAnimation)
