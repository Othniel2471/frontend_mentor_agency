// const active = document.querySelector('.active');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-contents2');

menuToggle.addEventListener('click', ()=>{
    menuToggle.classList.toggle('active');
    nav.classList.toggle('activee');
})