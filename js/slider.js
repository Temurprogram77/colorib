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
    perPage: 5,
    autoplay: true,
    snap: true,
    type: "loop",
    focus: "center",
  });
  splide2.mount();
});
