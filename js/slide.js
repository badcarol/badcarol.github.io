let isDown = false;
let startX;
let scrollLeft;
// const dragArea = document.querySelector('.draggable');
const slider = document.querySelector('.items');
const range = document.getElementById('range');
const item = document.querySelectorAll(".item");
const outerContent = document.querySelector('.wrapper');


const end = () => {
    isDown = false;
    slider.classList.remove('active');
    activeClass();

}

const start = (e) => {
    e.preventDefault();
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
}

const move = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
    const dist = (x - startX);
    slider.scrollLeft = scrollLeft - dist;
    range.value = slider.scrollLeft;
    activeClass();

}

const move2 = (e) => {
    slider.scrollLeft = range.value;
    activeClass();
}


const activeClass = () => {
    let finalPosX;
    for (var i = 0; i < item.length; i++) {
        const itemPosX = item[i].offsetLeft;
        finalPosX = itemPosX - slider.scrollLeft;

        if (finalPosX >= 150 && finalPosX <= 300) {
            item[i].classList.add('active');
            item[i].classList.add('scale-up-center');
        } else {
            item[i].classList.remove('active');
            item[i].classList.remove('scale-up-center');
        }
    }
}

const clickthrough = (e) => {
    console.log(e)

}

(() => {

    slider.addEventListener('mousedown', start);
    slider.addEventListener('touchstart', start);

    slider.addEventListener('mousemove', move);
    slider.addEventListener('touchmove', move);

    slider.addEventListener('mouseleave', end);
    slider.addEventListener('mouseup', end);
    slider.addEventListener('touchend', end);

    range.addEventListener('input', move2);


})();
