let navIcon = document.querySelectorAll('.nav-icons-container>div');
let navLinks = document.querySelectorAll('.nav-text-container>span');

navIcon.forEach((item, index, arr) => {
    item.addEventListener('mouseover', (e) => {
        item.classList.add('hovered');
        navLinks[index].classList.add('hovered');
    });
    item.addEventListener('mouseout', (e) => {
        item.classList.remove('hovered');
        navLinks[index].classList.remove('hovered');
    });
});

navLinks.forEach((item, index, arr) => {
    item.addEventListener('mouseover', (e) => {
        item.classList.add('hovered');
        navIcon[index].classList.add('hovered');
    });
    item.addEventListener('mouseout', (e) => {
        item.classList.remove('hovered');
        navIcon[index].classList.remove('hovered');
    });
});