const testimonialSwiper = new Swiper(".testimonialSwiper", {

    loop: true,

    slidesPerView: 3,

    spaceBetween: 25,

    speed: 900,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },

    breakpoints: {

        0: {
            slidesPerView: 1,
            spaceBetween: 15
        },

        600: {
            slidesPerView: 2,
            spaceBetween: 20
        },

        1000: {
            slidesPerView: 3,
            spaceBetween: 25
        }

    }

});