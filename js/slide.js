var isDown = false;
var drag = false;
var startX;
var scrollLeft;
var finalPosX;
var currentUrl = '';
var dragArea = document.querySelector('.draggable');
var click1 = document.getElementById('clickUrl');
var slider = document.querySelector('.items');
var range = document.getElementById('range');
var outerContent = document.querySelector('.wrapper');

function onInit(){

    // slider.addEventListener('mousedown', start, false);
    // slider.addEventListener('touchstart', start, false);
    // slider.addEventListener('mousemove', move, false);
    // slider.addEventListener('touchmove', move, false);
    // slider.addEventListener('mouseleave', end, false);
    // slider.addEventListener('mouseup', end, false);
    // slider.addEventListener('touchend', end, false);
    dragArea.addEventListener('mousedown', start, false);
    dragArea.addEventListener('touchstart', start);
    dragArea.addEventListener('mousemove', move, false);
    dragArea.addEventListener('touchmove', move);
    dragArea.addEventListener('mouseleave', end, false);
    dragArea.addEventListener('mouseup', end, false);
    dragArea.addEventListener('touchend', end);

    // click1.addEventListener('click', click);
    range.addEventListener('input', move2);
   

}

function start(e){
    e.preventDefault();
    e.stopPropagation();
    drag = false;
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;  

    activeClass();

}
function move(e){
    if (!isDown) return;
    e.preventDefault();
    drag = true;
    var x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
    var dist = (x - startX);
    slider.scrollLeft = scrollLeft - dist;
    range.value = slider.scrollLeft;    
    activeClass();
}

function end(e){
    isDown = false;   
    slider.classList.remove('active');
    activeClass();   
    if(drag){
        e.preventDefault();
        return false;
    }else{
        window.open(currentUrl,"landingpage ");
        return false;
    }
    
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
            currentUrl = li[i].getAttribute("href");
            replaceUrl();
        } else {
            li[i].classList.remove('active');
            li[i].classList.remove('scale-up-center');
            // li[i].classList.remove('zindex');
            
        }
    }
}

function replaceUrl(){
    if(currentUrl !== ''){
        dragArea.setAttribute('href', currentUrl )
    }
}

window.addEventListener("load", onInit);