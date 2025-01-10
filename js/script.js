"use strict";
const scrollHeader = () => {
  const header = document.getElementById("navbar");
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 100
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

// render

const books = [
    {
        img: '/assets/img/book1.webp',
        name: 'Independent Woman',
        after: 'J. R. Rain',
        review: '120',
        price: '$50',
    },
    {
        img: '/assets/img/book2.webp',
        name: 'Queen bee',
        after: 'J. R. Rain',
        review: '112',
        price: '$56',
    },
    {
        img: '/assets/img/book3.webp',
        name: 'Moon Dance',
        after: 'J. R. Rain',
        review: '167',
        price: '$62',
    },
    {
        img: '/assets/img/book4.webp',
        name: 'Very Nice',
        after: 'J. R. Rain',
        review: '120',
        price: '$70',
    },
    {
        img: '/assets/img/book5.webp',
        name: 'Evanesce',
        after: 'J. R. Rain',
        review: '220',
        price: '$56',
    },
    {
        img: '/assets/img/book6.webp',
        name: 'Sin Eater',
        after: 'J. R. Rain',
        review: '83',
        price: '$40',
    },
]

let data = document.querySelector(".data");
let inp = document.querySelector("#search-inp");
books.forEach((book) => {
  const card = document.createElement("div");
  card.innerHTML = `
        <div class="bg-whiteColor max-w-fit">
            <img src="${book.img}" class="" alt="book">
            <h2 class="ml-3 mt-3 text-[20px] font-semibold">${book.name}</h2>
            <p class="ml-3 text-colorGrey2 text-[13px] font-normal">${book.after}</p>
            <div class="flex items-center ml-2">
                <img src="assets/svg/star.png" class="w-[20px]" alt="star">
                <img src="assets/svg/star.png" class="w-[20px]" alt="star">
                <img src="assets/svg/star.png" class="w-[20px]" alt="star">
                <img src="assets/svg/star.png" class="w-[20px]" alt="star">
                <img src="assets/svg/star.png" class="w-[20px]" alt="star">
            </div>
            <div class="flex justify-between items-end mx-3 pb-3">
                <p class="text-[14px] font-normal">(${book.review} Review)</p>
                <h5 class="text-[20px] text-colorRed font-semibold">${book.price}</h5>
            </div>
        </div>
    `;

    data.appendChild(card);
});

// bosilish

let search_modal = document.querySelector(".search-modal");
let close_btn = document.querySelector(".close_btn");

inp.addEventListener("click", () => {
  search_modal.classList.remove("hidden");
  setTimeout(() => {
    search_modal.classList.add("translate-y-4");
  }, 50);
});

close_btn.addEventListener("click", () => {
  search_modal.classList.remove("translate-y-4");
  setTimeout(() => {
    search_modal.classList.add("hidden");
  }, 100);
});
