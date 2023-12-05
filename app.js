
//const blockAll = document.querySelector('.blockAll')

const divs = document.querySelectorAll('div');

document.querySelector('.button1').addEventListener('click', () => {
    divs[1].classList.add('block1')
    divs[2].classList.remove('block2')
    divs[3].classList.remove('block3')
    console.log(divs[0])
})

document.querySelector('.button2').addEventListener('click', () => {
    divs[2].classList.add('block2')
    divs[1].classList.remove('block1')
    divs[3].classList.remove('block3')
    console.log(divs[0])
})

document.querySelector('.button3').addEventListener('click', () => {
    divs[3].classList.add('block3')
    divs[1].classList.remove('block1')
    divs[2].classList.remove('block2')
    console.log(divs[0])
})