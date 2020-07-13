var swiper = new Swiper('.swiper-container', {
      // Enable lazy loading
      loop: true,
      // autoplay: {
      //   delay: 5000,
      //   disableOnInteraction: false
      // },
      lazy: true,
      autoHeight: true,
      pagination: {
      	el: '.swiper-pagination',
      	dynamicBullets: true,
      	clickable: true,
      },
      navigation: {
      	nextEl: '.swiper-button-next',
      	prevEl: '.swiper-button-prev',
      },

});