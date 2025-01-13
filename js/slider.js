
  var splide1 = new Splide(".splide", {
    type: "loop",
    snap: true,
    arrows: false,
    autoplay: true,
    focus: "start",
    perpage: 1,
  });
  splide1.mount();
  
  var splide2 = new Splide("#splide", {
    perPage: 6,
    breakpoints: {
      1200: { perPage: 5 }, // Tablets
      1024: { perPage: 4 }, // Mobile devices
      768: { perPage: 3 },  // Small screens
      600: { perPage: 3 },  // Extra small screens
      400: { perPage: 2 },  // Extra extra small screens
    },
    arrows: false,
    autoplay: true,
    snap: true,
    pagination: false,
    type: "loop",
    focus: "start",
  });
  splide2.mount();
