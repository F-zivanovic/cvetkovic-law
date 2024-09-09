const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("nav__list");
const navLinks = document.querySelectorAll(".list__link");


hamburger.addEventListener('click', () =>{
    navList.classList.toggle('open');
});



// Open/close desktop services dropdown
const desktopDropdown = document.querySelector('.dropdown');
const navDropdown = document.querySelector('.dropdown > .nav__dropdown');

desktopDropdown.addEventListener('click', ()=>{
    navDropdown.classList.toggle('open__dropdown');
})


// Close Mobile menu
const closeIcon = document.getElementById('close');
closeIcon.addEventListener('click', ()=>{
    navList.classList.remove('open');
});