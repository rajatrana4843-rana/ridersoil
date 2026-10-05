/*=========================================
SWIPER SLIDER
=========================================*/

const heroSlider = new Swiper(".heroSwiper", {

    loop: true,

    speed: 1200,

    effect: "fade",

    fadeEffect: {
        crossFade: true
    },

    autoplay: {

        delay: 5000,

        disableOnInteraction: false,

    },

    navigation: {

        nextEl: ".swiper-button-next",

        prevEl: ".swiper-button-prev",

    },

    pagination: {

        el: ".swiper-pagination",

        clickable: true,

    },

    on: {

        init: function () {

            animateSlide(this.slides[this.activeIndex]);

        },

        slideChangeTransitionStart: function () {

            resetAnimation();

        },

        slideChangeTransitionEnd: function () {

            animateSlide(this.slides[this.activeIndex]);

        }

    }

});


/*=========================================
RESET
=========================================*/

function resetAnimation() {

    gsap.set(

        ".swiper-slide .sub-title," +

        ".swiper-slide h1," +

        ".swiper-slide p," +

        ".swiper-slide .theme-btn",

        {

            opacity: 0,

            y: 60

        }

    );

}


/*=========================================
ANIMATE
=========================================*/

function animateSlide(slide) {

    const tl = gsap.timeline();

    tl.to(slide.querySelector(".sub-title"), {

        opacity: 1,

        y: 0,

        duration: .7,

        ease: "power3.out"

    })

    .to(slide.querySelector("h2"), {

        opacity: 1,

        y: 0,

        duration: .8,

        ease: "power3.out"

    }, "-=.3")

    .to(slide.querySelector("p"), {

        opacity: 1,

        y: 0,

        duration: .8,

        ease: "power3.out"

    }, "-=.4")

    .to(slide.querySelector(".theme-btn"), {

        opacity: 1,

        y: 0,

        duration: .8,

        ease: "power3.out"

    }, "-=.4");

}


/*=========================================
KEN BURNS EFFECT
=========================================*/

gsap.to(".slide-bg img", {

    scale: 1.12,

    duration: 8,

    repeat: -1,

    yoyo: true,

    ease: "power1.inOut"

});

const menuToggle = document.getElementById("menuToggle");
const navArea = document.getElementById("navArea");

menuToggle.addEventListener("click", function () {

    navArea.classList.toggle("active");

    const icon = this.querySelector("i");

    if (navArea.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }

});