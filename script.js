var typed = new Typed('#auto-type', {
    strings: ['Front End Developer', 'Web Developer', 'Ui Designer'],
    typeSpeed: 80,
    backSpeed: 60,
    loop: true
});

document.addEventListener("DOMContentLoaded", function () {
    var nav = document.querySelector("nav");

    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;

        if (scrollPosition > 0) {
            nav.classList.add("active-navbar");
        } else {
            nav.classList.remove("active-navbar");
        }
    });
});


let menuIcon = document.querySelector(".bx-menu-alt-right");
let navLinks = document.querySelector("nav ul");

menuIcon.addEventListener("click", function () {
    navLinks.classList.toggle("show-menu");
    menuIcon.classList.toggle("bx-x");
});

document.addEventListener("click", function (event) {
    if (!event.target.closest("nav") && !event.target.matches(".bx-menu-alt-right")) {
        navLinks.classList.remove("show-menu");
    }
});

let displayCard1 = document.querySelector(".display-card-1")
let displayCard2 = document.querySelector(".display-card-2")
let displayCard3 = document.querySelector(".display-card-3")
let displayCard4 = document.querySelector(".display-card-4")
let openDetail1 = document.querySelector(".service-card-detail-1")
let openDetail2 = document.querySelector(".service-card-detail-2")
let openDetail3 = document.querySelector(".service-card-detail-3")
let openDetail4 = document.querySelector(".service-card-detail-4")
let hideDetail1 = document.querySelector(".hide-card-1")
let hideDetail2 = document.querySelector(".hide-card-2")
let hideDetail3 = document.querySelector(".hide-card-3")
let hideDetail4 = document.querySelector(".hide-card-4")
let overlay = document.querySelector('.overlay');

displayCard1.addEventListener("click", function () {
    openDetail1.style.scale = "1";
    overlay.classList.add('active');
})
displayCard2.addEventListener("click", function () {
    openDetail2.style.scale = "1";
    overlay.classList.add('active');
})
displayCard3.addEventListener("click", function () {
    openDetail3.style.scale = "1";
    overlay.classList.add('active');
})
displayCard4.addEventListener("click", function () {
    openDetail4.style.scale = "1";
    overlay.classList.add('active');
})

hideDetail1.addEventListener("click", function () {
    openDetail1.style.scale = "0";
    overlay.classList.remove('active');
})

hideDetail2.addEventListener("click", function () {
    openDetail2.style.scale = "0";
    overlay.classList.remove("active");
})
hideDetail3.addEventListener("click", function () {
    openDetail3.style.scale = "0";
    overlay.classList.remove("active");
})
hideDetail4.addEventListener("click", function () {
    openDetail4.style.scale = "0";
    overlay.classList.remove("active");
})


// Scrool top

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function() {
    var btn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// potfolio popup

let openProject1 = document.getElementById("openportfolio1")
let project1Detail1 = document.getElementById("project1Detail1")
let hideProject1 = document.getElementById("hide-projct-1")
let openProject2 = document.getElementById("openportfolio2")
let project1Detail2 = document.getElementById("project1Detai2")
let hideProject2 = document.getElementById("hide-projct-2")
let openProject3 = document.getElementById("openportfolio3")
let project1Detail3 = document.getElementById("project1Detai3")
let hideProject3 = document.getElementById("hide-projct-3")
let openProject4 = document.getElementById("openportfolio4")
let project1Detail4 = document.getElementById("project1Detai4")
let hideProject4 = document.getElementById("hide-projct-4")
let openProject5 = document.getElementById("openportfolio5")
let project1Detail5 = document.getElementById("project1Detai5")
let hideProject5 = document.getElementById("hide-projct-5")
let openProject6 = document.getElementById("openportfolio6")
let project1Detail6 = document.getElementById("project1Detai6")
let hideProject6 = document.getElementById("hide-projct-6")

openProject1.addEventListener("click", () => {
    project1Detail1.style.scale = "1";
    overlay.classList.add("active")
})
openProject2.addEventListener("click", () => {
    project1Detail2.style.scale = "1";
    overlay.classList.add("active")
})
openProject3.addEventListener("click", () => {
    project1Detail3.style.scale = "1";
    overlay.classList.add("active")
})
openProject4.addEventListener("click", () => {
    project1Detail4.style.scale = "1";
    overlay.classList.add("active")
})
openProject5.addEventListener("click", () => {
    project1Detail5.style.scale = "1";
    overlay.classList.add("active")
})
openProject6.addEventListener("click", () => {
    project1Detail6.style.scale = "1";
    overlay.classList.add("active")
})

hideProject1.addEventListener("click",() => {
    project1Detail1.style.scale = "0";
    overlay.classList.remove("active")
})
hideProject2.addEventListener("click",() => {
    project1Detail2.style.scale = "0";
    overlay.classList.remove("active")
})
hideProject3.addEventListener("click",() => {
    project1Detail3.style.scale = "0";
    overlay.classList.remove("active")
})
hideProject4.addEventListener("click",() => {
    project1Detail4.style.scale = "0";
    overlay.classList.remove("active")
})
hideProject5.addEventListener("click",() => {
    project1Detail5.style.scale = "0";
    overlay.classList.remove("active")
})
hideProject6.addEventListener("click",() => {
    project1Detail6.style.scale = "0";
    overlay.classList.remove("active")
})