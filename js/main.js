    /*=============================== Data-Background ===============================*/
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    })

    /*=============================== banner-carosel-area-slide ===============================*/
    $('.banner-area .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay:true,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

  /*=============================== student-review ===============================*/
  $('.Student-review-area .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay:true,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

  /*=============================== student-review ===============================*/
  $('.brand-logo .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay:true,
    nav: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})

    /*=============================== imgages-gallery ===============================*/

    $('.gallery-item').magnificPopup({
        type: 'image',
        gallery:{
          enabled:true
        }
      });