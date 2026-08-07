// =========================================
// MENÚ RESPONSIVE
// =========================================

const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// =========================================
// CERRAR MENÚ AL HACER CLICK
// =========================================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// =========================================
// ANIMACIÓN AL HACER SCROLL
// =========================================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


sections.forEach(section => {

    observer.observe(section);

});


// =========================================
// AÑO AUTOMÁTICO DEL FOOTER
// =========================================

const footerText = document.querySelector(".footer p");

const currentYear = new Date().getFullYear();

footerText.innerHTML =
    `© ${currentYear} Emmanuel González. Todos los derechos reservados.`;