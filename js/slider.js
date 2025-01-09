document.addEventListener("DOMContentLoaded", function () {
  var splide1 = new Splide(".splide", {
    type: "loop",
    snap: true,
    arrows: false,
    autoplay: true,
    perpage: 1,
  });
  splide1.mount();

  var splide2 = new Splide("#splide", {
    perPage: 6,
    autoplay: true,
    snap: true,
    pagination: false,
    type: "loop",
    focus: "start",
  });
  splide2.mount();
});
