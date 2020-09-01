// document.addEventListener( 'DOMContentLoaded', function () {
//     new Splide( '.splide', {
//         type: 'loop',
//         perPage: 6,
//         focus: 'center',
//         autoWidth:'true',
//         trimSpace: false,
//         drag: true,
//         direction:'ltr'
//     } ).mount();
// });

var scroll = document.getElementById("scroll-range");

scroll.oninput = function () {
	var panel = document.getElementById("scrolling-container");	
    var total = panel.scrollWidth - panel.offsetWidth;
    
    var percentage = total*(this.value/100);    	
    // console.log(total);
    
	panel.scrollLeft = percentage;
	// console.log(percentage);
}

// Swipe slider
// var featured = document.getElementById("featured");
// if( "ontouchstart" in window ) {
//     var touchStart = function(evt) {
//         var startTime = (new Date()).getTime();
//         var startX = evt.changedTouches[0].pageX;
//         var touchEnd = function(evt) {
//             document.removeEventListener("touchend", touchEnd);
//             var diffX = evt.changedTouches[0].pageX - startX;
//             var elapsed = (new Date()).getTime() - startTime;
//             console.log( "Swiped " + diffX + " pixels in " + elapsed + " milliseconds" );
//             if( elapsed < 200 && Math.abs(diffX) > 50 ) {
//                 ( diffX < 0 ) ? slideright() : slideleft();
//             }
//         }
//         document.addEventListener("touchend", touchEnd);
//     };
//     featured.addEventListener("touchstart", touchStart);
// }

var max_left = -600;
$(".range-scroll" ).draggable({ axis: "x" });