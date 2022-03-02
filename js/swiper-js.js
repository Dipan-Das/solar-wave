// JavaScript Document

var swiper = new Swiper(".mySwiper", {
//        cssMode: true,
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
			
	
	breakpoints: {

            575: {

                slidesPerView: 2,

            },

            768: {

                slidesPerView: 2,

            },

            992: {

                slidesPerView: 3,

            },

            1200: {

                slidesPerView: 4,

            },

        }
	
	
      });