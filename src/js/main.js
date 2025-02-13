// Open hamburger menu
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  navList.classList.add("open");
});

// Close hamburger menu
const navList = document.getElementById("nav__list");
const closeIcon = document.getElementById("close");

closeIcon.addEventListener("click", () => {
  navList.classList.remove("open");
});

// Close hamburger menu on width gratjer than 1200px
window.addEventListener("resize", () => {
  if (window.innerWidth > 1200) {
    navList.classList.remove("open");
  }
});

// Form validation
const sumbitBtn = document.querySelector(".contact__submit");
const contactForm = document.querySelector(".contact__form");
const contactMsg = contactForm.querySelector(".contact__msg");

sumbitBtn.addEventListener("click", collectUserData);

function collectUserData(e) {
  e.preventDefault();

  const inputs = contactForm.querySelectorAll("input");

  const userData = {
    name: inputs[0].value,
    email: inputs[1].value,
    message: inputs[2].value,
  };

  validateContactForm(userData);
}

function validateContactForm(userData) {
  if (userData.name == "" || userData.email == "" || userData.message == "") {
    contactMsg.innerHTML = "Sva polja forme su obavezna";
    return;
  }

  let emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!userData.email.match(emailFormat)) {
    contactMsg.innerHTML = "Unesite validan email";
  } else {
    contactMsg.innerHTML = "Forma je uspešno poslata. Očekujte odgovor!";
  }
}

// Consultation BTN
const consultationBtn = document.querySelector(
  '[data-item="consultation-btn"]'
);

document.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    consultationBtn.classList.add("active");
  } else {
    consultationBtn.classList.remove("active");
  }
});

// Dynamic date
document.getElementById("date").textContent = new Date().getFullYear();
