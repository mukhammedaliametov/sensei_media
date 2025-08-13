const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle("active");
})