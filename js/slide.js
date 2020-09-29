let isDown = false;
let startX;
let scrollLeft;
const dragArea = document.querySelector('.draggable');
const slider = document.querySelector('.items');
const range = document.getElementById('range');
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
    const li = document.querySelectorAll(".item");
    let finalPosX;
    for (var i = 0; i < li.length; i++) {
        const liPosX = li[i].offsetLeft;
        finalPosX = liPosX - slider.scrollLeft;

        if (finalPosX >= 150 && finalPosX <= 300) {
            li[i].classList.add('active');
            li[i].classList.add('scale-up-center');
        } else {
            li[i].classList.remove('active');
            li[i].classList.remove('scale-up-center');
        }
    }
}


(() => {

    dragArea.addEventListener('mousedown', start);
    dragArea.addEventListener('touchstart', start);

    dragArea.addEventListener('mousemove', move);
    dragArea.addEventListener('touchmove', move);

    dragArea.addEventListener('mouseleave', end);
    dragArea.addEventListener('mouseup', end);
    dragArea.addEventListener('touchend', end);

    range.addEventListener('input', move2);


})();
