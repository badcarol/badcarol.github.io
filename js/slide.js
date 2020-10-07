var isDown = false;
var startX;
var scrollLeft;
var finalPosX;
var dragArea = document.querySelector('.draggable');
var slider = document.querySelector('.items');
var range = document.getElementById('range');
var outerContent = document.querySelector('.wrapper');

function onInit(){

    dragArea.addEventListener('mousedown', start, false);
    dragArea.addEventListener('touchstart', start, false);
    dragArea.addEventListener('mousemove', move, false);
    dragArea.addEventListener('touchmove', move, false);
    dragArea.addEventListener('mouseleave', end, false);
    dragArea.addEventListener('mouseup', end, false);
    dragArea.addEventListener('touchend', end, false);
    range.addEventListener('input', move2);
   

}

function start(e){
    e.preventDefault();
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft; 

    activeClass();

}

function move(e){
    if (!isDown) return;
    e.preventDefault();
    var x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
    var dist = (x - startX);
    slider.scrollLeft = scrollLeft - dist;
    range.value = slider.scrollLeft;
    activeClass();
}

function end(){
    isDown = false;
    slider.classList.remove('active');
    activeClass();

}

function move2(e){
    slider.scrollLeft = range.value;
    activeClass();
}


function activeClass() {
    var li = document.querySelectorAll(".item");
    for (var i = 0; i < li.length; i++) {
        var liPosX = li[i].offsetLeft;
        finalPosX = liPosX - slider.scrollLeft;

        if (finalPosX >= 120 && finalPosX <= 265) {
            li[i].classList.add('active');
            li[i].classList.add('scale-up-center');
            // delay(i);
        } else {
            li[i].classList.remove('active');
            li[i].classList.remove('scale-up-center');
            // li[i].classList.remove('zindex');
            
        }
    }
}

function delay(i){
    var li = document.querySelectorAll(".item");
    setTimeout(function(){
        li[i].classList.add('zindex');
      },1000);
}


window.addEventListener("load", onInit);