
 //client-slider
 var slider = tns({
    container: '.client-slider',
    loop: true,
    autoplay: true,
    mouseDrag: true,
    controls: true,
    navPosition: "bottom",
    nav: false,
    autoplayTimeout: 4000,
    speed: 900,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    controlsText: ['&#8592;', '&#8594;'],
    autoplayButtonOutput: false,
    responsive: {
        768: {
            gutter: 20,
            items: 1
        } 
    }
  });
  
  