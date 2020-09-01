document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide', {
        type: 'loop',
        perPage: 6,
        focus: 'center',
        autoWidth:'true'
    } ).mount();
});