const menuBar = document.querySelector(".menu-bar");
const close = document.querySelector(".close");
const mobileMenu = document.querySelector(".mobile-menu");
const tabBtns = document.querySelectorAll(".tab-btn");
const menuCards = document.querySelectorAll(".menu-card");
const header = document.querySelector(".header");
const sections = document.querySelectorAll(".section");
const navlinks = document.querySelectorAll(".navlink");
const backToTopBtn = document.querySelector(".backToTop");
window.addEventListener("DOMContentLoaded", () => {

    if (tabBtns) {
        tabBtns.forEach((btn) => {
            btn.addEventListener("click", toggleTab);
        })
    }

    if (close) {
        close.addEventListener("click", closeMenu);
    }
    if (menuBar) {
        menuBar.addEventListener("click", openMenu);
    }
})

window.addEventListener("scroll", () => {
    if (window.scrollY > 1000) {
        backToTopBtn.classList.add("active");
    } else {
        backToTopBtn.classList.remove("active");
    }

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

    activeClass();
})

navlinks.forEach((link) => {
    link.addEventListener("click", () => {
        if (mobileMenu.classList.contains("active")) {
            mobileMenu.classList.remove("active");
        }
    })
})

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

function activeClass() {
    let current = "";

    sections.forEach((section) => {
        let secTop = section.offsetTop;
        let secHeight = section.clientHeight;

        if (pageYOffset >= secTop - secHeight / 4) {
            current = section.getAttribute("id");
        }
    })

    navlinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    })
}

function toggleTab() {
    const category = this.getAttribute('data-category');

    tabBtns.forEach((btn) => {
        btn.classList.remove("active")
    })
    this.classList.add("active");

    menuCards.forEach((item) => {
        if (category === "all" || item.getAttribute("data-category") === category) {
            item.style.display = "block";
            item.classList.add("fadeIn");
        } else {
            item.style.display = "none";
        }
    })
}

function closeMenu() {
    if (mobileMenu.classList.contains("active")) {
        mobileMenu.classList.remove("active");
    }
}

function openMenu() {
    if (!mobileMenu.classList.contains("active")) {
        mobileMenu.classList.add("active");
    }
}