$(document).ready(function () {
    $(".product-card-wrapper")
        .not(".slick-initialized")
        .slick({
            infinite: true,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 2000,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            prevArrow: ".slider-btn-left",
            nextArrow: ".slider-btn-right",
            responsive: [
                {
                    breakpoint: 770,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
});