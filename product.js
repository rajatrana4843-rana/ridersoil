const productSlider = new Swiper(".rlProductSlider", {

    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    speed: 800,

    navigation: {
        nextEl: ".rl-next",
        prevEl: ".rl-prev",
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {

        0: {
            slidesPerView: 1
        },

        768: {
            slidesPerView: 2
        },

        1200: {
            slidesPerView: 3
        }

    }

});