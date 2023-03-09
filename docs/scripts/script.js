// Navigation
const body = document.body;
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('bottom-header');
const overlay = document.getElementById('overlay');

hamburger.addEventListener('click', function(e){
    e.preventDefault();
    nav.classList.remove('no-transition');
    body.classList.toggle('show-menu');
});

overlay.addEventListener('click', function(){
    nav.classList.remove('no-transition');
    body.classList.remove('show-menu');
});

nav.addEventListener('transitionend', function(){
    nav.classList.add('no-transition');
});
