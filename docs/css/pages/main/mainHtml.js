let navbarIconContainer = document.querySelector('.nav-icons-container');
let navbarTextContainer = document.querySelector('.nav-text-container');

let main = document.querySelector('main');

let navWidth;

setDefaultPosition();

menuIcon.addEventListener('click', () => {
    if (navLinksContainer.classList.contains('closeNav')) {
        navWidth = navbarIconContainer.offsetWidth;
        main.style.marginLeft = `${navWidth}px`;
    } else {
        navWidth = navbarIconContainer.offsetWidth + navbarTextContainer.offsetWidth;
        main.style.marginLeft = `${navWidth}px`;
    }
});

function setDefaultPosition() {
    navWidth = navbarIconContainer.offsetWidth;
    main.style.marginLeft = `${navWidth}px`;
}