let navButton = document.querySelector('.nav-button');
var nav = document.querySelector('nav');

navButton.addEventListener('click', function() {
    nav.classList.toggle('nav-close');
});