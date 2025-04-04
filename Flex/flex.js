let box = document.querySelector('.box')

box.addEventListener('mouseenter', () => {
    box.style.backgroundColor = 'yellow';
});

box.addEventListener('mouseout', () => {
    box.style.backgroundColor = 'purple';
    box.style.cursor = 'default'
});

let isMousedown = false;
let offsetX = 0;
let offsetY = 0;

box.addEventListener('mousedown', (e) => {
    box.style.cursor = 'grabbing'
    isMousedown = true;
    offsetX = e.clientX - box.offsetLeft;
    offsetY = e.clientY - box.offsetTop;
});

document.addEventListener('mousemove', (e) => {
    if(isMousedown){
        box.style.left = `${e.clientX - offsetX}px`
        box.style.top = `${e.clientY - offsetY}px`
    }
});

box.addEventListener('click', () => {
    isMousedown = false;
})