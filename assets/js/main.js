let search = document.querySelector('.search-box');
document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    menu.classList.remove('active');
};

let menu = document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active');
    search.classList.remove('active')
};
// Hide menu and search box when scroll
window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active')
};