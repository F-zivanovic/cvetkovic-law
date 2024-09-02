const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("nav__list");
const navLinks = document.querySelectorAll(".list__link");

hamburger.addEventListener('click', () =>{
    navList.classList.toggle('open');
});


navLinks.forEach(link => {
    link.addEventListener('click', ()=>{
        navList.classList.remove('open');
    })
});