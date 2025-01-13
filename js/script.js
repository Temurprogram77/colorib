"use strict";
const scrollHeader = () => {
  const header = document.getElementById("navbar");

  this.scrollY >= 100
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

const scrollBtn = () => {
  const header = document.querySelector(".btn");

  this.scrollY >= 100
    ? header.classList.remove("hidden")
    : header.classList.add("hidden");
};
window.addEventListener("scroll", scrollBtn);

const books = [
  {
    img: "/assets/img/book1.webp",
    name: "Independent Woman",
    after: "J. R. Rain",
    review: "120",
    price: "$50",
  },
  {
    img: "/assets/img/book2.webp",
    name: "Queen bee",
    after: "J. R. Rain",
    review: "112",
    price: "$56",
  },
  {
    img: "/assets/img/book3.webp",
    name: "Moon Dance",
    after: "J. R. Rain",
    review: "167",
    price: "$62",
  },
  {
    img: "/assets/img/book4.webp",
    name: "Very Nice",
    after: "J. R. Rain",
    review: "120",
    price: "$70",
  },
  {
    img: "/assets/img/book5.webp",
    name: "Evanesce",
    after: "J. R. Rain",
    review: "220",
    price: "$56",
  },
  {
    img: "/assets/img/book6.webp",
    name: "Sin Eater",
    after: "J. R. Rain",
    review: "83",
    price: "$40",
  },
  {
    img: "/assets/img/book7.jpg",
    name: "Patrick RothFuss",
    after: "J. R. Rain",
    review: "320",
    price: "$121",
  },
  {
    img: "/assets/img/book8.jpg",
    name: "Patrick RothFuss Second",
    after: "J. R. Rain",
    review: "366",
    price: "$199",
  },
  {
    img: "/assets/img/book9.jpg",
    name: "Life In Woods",
    after: "J. R. Rain",
    review: "123",
    price: "$33",
  },
  {
    img: "/assets/img/book10.jpg",
    name: "The Lion Wardrobe",
    after: "J. R. Rain",
    review: "45",
    price: "$22",
  },
  {
    img: "/assets/img/book11.jpg",
    name: "Harry Potter",
    after: "J. R. Rain",
    review: "626",
    price: "$167",
  },
  {
    img: "/assets/img/book12.webp",
    name: "Harry Potter 2",
    after: "J. R. Rain",
    review: "712",
    price: "$189",
  },
];
const booksAll = [
  {
    img: "/assets/img/book1.webp",
    name: "Independent Woman",
    after: "J. R. Rain",
    review: "120",
    price: "$50",
    isAll: true,
    horror: false,
    thriller: false,
    history: true,
    science: true,
    more: true,
  },
  {
    img: "/assets/img/book2.webp",
    name: "Queen bee",
    after: "J. R. Rain",
    review: "112",
    price: "$56",
    isAll: true,
    horror: false,
    thriller: false,
    history: true,
    science: false,
    more: true,
  },
  {
    img: "/assets/img/book3.webp",
    name: "Moon Dance",
    after: "J. R. Rain",
    review: "167",
    price: "$62",
    isAll: true,
    horror: true,
    thriller: true,
    history: true,
    science: true,
    more: true,
  },
  {
    img: "/assets/img/book4.webp",
    name: "Very Nice",
    after: "J. R. Rain",
    review: "120",
    price: "$70",
    isAll: true,
    horror: false,
    thriller: true,
    history: true,
    science: false,
    more: true,
  },
  {
    img: "/assets/img/book5.webp",
    name: "Evanesce",
    after: "J. R. Rain",
    review: "220",
    price: "$56",
    isAll: true,
    horror: true,
    thriller: false,
    history: true,
    science: true,
    more: true,
  },
  {
    img: "/assets/img/book6.webp",
    name: "Sin Eater",
    after: "J. R. Rain",
    review: "83",
    price: "$40",
    isAll: true,
    horror: true,
    thriller: true,
    history: true,
    science: true,
    more: true,
  },

  {
    img: "/assets/img/book7.jpg",
    name: "Patrick RothFuss",
    after: "J. R. Rain",
    review: "320",
    price: "$121",
    more: false,
  },
  {
    img: "/assets/img/book8.jpg",
    name: "Patrick RothFuss Second",
    after: "J. R. Rain",
    review: "366",
    price: "$199",
    more: false,
  },
  {
    img: "/assets/img/book9.jpg",
    name: "Life In Woods",
    after: "J. R. Rain",
    review: "123",
    price: "$33",
    more: false,
  },
  {
    img: "/assets/img/book10.jpg",
    name: "The Lion Wardrobe",
    after: "J. R. Rain",
    review: "45",
    price: "$22",
    more: false,
  },
  {
    img: "/assets/img/book11.jpg",
    name: "Harry Potter",
    after: "J. R. Rain",
    review: "626",
    price: "$167",
    more: false,
  },
  {
    img: "/assets/img/book12.webp",
    name: "Harry Potter 2",
    after: "J. R. Rain",
    review: "712",
    price: "$189",
    more: false,
  },
];

// menu btn

let menu_modal = document.querySelector('.menu_modal')
let menu = document.querySelector('.menu')

menu.addEventListener('click', () => {
  menu_modal.classList.toggle('hidden')
})

let data = document.querySelector(".data");
let inp = document.querySelector("#search-inp");
let inp_btn = document.querySelector(".search");
let section1 = document.querySelector(".section1");
let section2 = document.querySelector(".section2");
let section3 = document.querySelector(".section3");
let books2 = document.querySelector(".bookss");

// bosilish

let search_modal = document.querySelector(".search-modal");
let close_btn = document.querySelector(".close_btn");

inp.addEventListener("click", () => {
  search_modal.classList.remove("hidden");
  section1.classList.add("hidden");
  section2.classList.add("hidden");
  section3.classList.add("hidden");
  setTimeout(() => {
    search_modal.classList.add("translate-y-4");
  }, 50);
});

close_btn.addEventListener("click", () => {
  search_modal.classList.remove("translate-y-4");
  section1.classList.remove("hidden");
  section2.classList.remove("hidden");
  section3.classList.remove("hidden");
  setTimeout(() => {
    search_modal.classList.add("hidden");
  }, 100);
});

// ---render---

books.forEach((book) => {
  const card = document.createElement("div");
  card.innerHTML = `
        <div class="bg-whiteColor max-w-fit book">
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

// ---sort qilish---

let all = document.querySelector(".all");
let horror = document.querySelector(".horror");
let thriller = document.querySelector(".thriller");
let science = document.querySelector(".science");
let history = document.querySelector(".history");
let btnMore = document.querySelector(".btn_more");

// btnMore.addEventListener("click", () => {
//   // Barcha `more: false` qiymatlarni `true` ga o'zgartirish
//   booksAll.forEach((book) => {
//     if (book.more === false) {
//       book.more = true;
//       console.log(`${book.name} endi more: true bo'ldi`);
//     }
//   });

//   // Ekranni yangilash yoki yangi elementlarni qo'shish
//   booksAll.forEach((book) => {
//     if (book.more === true) {
//       const books22 = document.createElement("div");

//       books22.innerHTML = `
//         <div class="bg-whiteColor max-w-fit book">
//             <img src="${book.img}" class="" alt="book">
//             <h2 class="ml-3 mt-3 text-[20px] font-semibold">${book.name}</h2>
//             <p class="ml-3 text-colorGrey2 text-[13px] font-normal">${book.after}</p>
//             <div class="flex items-center ml-2">
//                 <img src="assets/svg/star.png" class="w-[20px]" alt="star">
//                 <img src="assets/svg/star.png" class="w-[20px]" alt="star">
//                 <img src="assets/svg/star.png" class="w-[20px]" alt="star">
//                 <img src="assets/svg/star.png" class="w-[20px]" alt="star">
//                 <img src="assets/svg/star.png" class="w-[20px]" alt="star">
//             </div>
//             <div class="flex justify-between items-end mx-3 pb-3">
//                 <p class="text-[14px] font-normal">(${book.review} Review)</p>
//                 <h5 class="text-[20px] text-colorRed font-semibold">${book.price}</h5>
//             </div>
//         </div>
//       `;

//       books2.appendChild(books22);
//     }
//   });

//   console.log("Barcha `more: false` qiymatlar `true` ga o'zgartirildi!");
// });

console.log("Books Arrdagi Render Function To'g'ri Ishladi");

// btnMore.addEventListener("click", () => {
//   // `more: false` qiymatlarni `true` ga o'zgartirish
//   booksAll.forEach((book) => {
//     if (book.more === false) {
//       book.more = true;
//       console.log(`${book.name} endi more: true bo'ldi`);
//     }
//   });

//   // Faqat yangi kitoblarni qo'shish
//   booksAll.forEach((book) => {
//     if (book.more === true && !document.getElementById(`book-${book.name}`)) {
//       const books22 = document.createElement("div");
//       books22.id = `book-${book.name}`; // Har bir kitob uchun unique ID

//       books22.innerHTML = `
//         <div class="bg-whiteColor max-w-fit book">
//             <img src="${book.img}" class="" alt="book">
//             <h2 class="ml-3 mt-3 text-[20px] font-semibold">${book.name}</h2>
//             <p class="ml-3 text-colorGrey2 text-[13px] font-normal">${book.after}</p>
//             <div class="flex items-center ml-2">
//                 <img src="assets/svg/star.png" class="w-[20px]" alt="star">
//                 <img src="assets/svg/star.png" class="w-[20px]" alt="star">
//                 <img src="assets/svg/star.png" class="w-[20px]" alt="star">
//                 <img src="assets/svg/star.png" class="w-[20px]" alt="star">
//                 <img src="assets/svg/star.png" class="w-[20px]" alt="star">
//             </div>
//             <div class="flex justify-between items-end mx-3 pb-3">
//                 <p class="text-[14px] font-normal">(${book.review} Review)</p>
//                 <h5 class="text-[20px] text-colorRed font-semibold">${book.price}</h5>
//             </div>
//         </div>
//       `;

//       books2.appendChild(books22);
//     }
//   });

//   console.log("Barcha `more: false` qiymatlar `true` ga o'zgartirildi!");
// });


function renderBooks() {
  booksAll.forEach((book) => {
    if (book.more === true && !document.getElementById(`book-${book.name}`)) {
      const bookDiv = document.createElement("div");
      bookDiv.id = `book-${book.name}`;

      bookDiv.innerHTML = `
        <div class="bg-whiteColor book">
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
      books2.appendChild(bookDiv);
    }
  });
}
btnMore.addEventListener("click", () => {
  booksAll.forEach((book) => {
    if (book.more === false) {
      book.more = true;
      console.log(`${book.name} endi more: true bo'ldi`);
    }
  });
  renderBooks();
});

renderBooks();

console.log("Render Function To'g'ri Ishladi");

// btnMore.addEventListener("click", () => {
//   console.log("salom");
//   let arr = [
//     booksAll.push({
//       img: "/assets/img/book7.jpg",
//       name: "Patrick RothFuss",
//       after: "J. R. Rain",
//       review: "320",
//       price: "$121",
//     }),
//   ];
//   console.log(typeof arr);
// });
all.addEventListener("click", () => {
  books2.innerHTML = "";
  let filterAll = booksAll.filter((item) => item.isAll == true);
  console.log(filterAll);

  all.classList.add("activeBtn");
  science.classList.remove("activeBtn");
  horror.classList.remove("activeBtn");
  thriller.classList.remove("activeBtn");
  history.classList.remove("activeBtn");
  filterAll.forEach((book) => {
    const books22 = document.createElement("div");
    books22.innerHTML = `
        <div class="bg-whiteColor max-w-fit book">
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
    books2.appendChild(books22);
  });
});
horror.addEventListener("click", () => {
  books2.innerHTML = "";
  let filterHorror = booksAll.filter((item) => item.horror == true);
  console.log(filterHorror);
  books2.classList.remove("justify-between");
  books2.classList.add("justify-start");
  books2.classList.add("gap-2");
  horror.classList.add("activeBtn");
  science.classList.remove("activeBtn");
  all.classList.remove("activeBtn");
  thriller.classList.remove("activeBtn");
  history.classList.remove("activeBtn");
  filterHorror.forEach((book) => {
    const books22 = document.createElement("div");
    books22.innerHTML = `
        <div class="bg-whiteColor max-w-fit book">
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
    books2.appendChild(books22);
  });
});
thriller.addEventListener("click", () => {
  books2.innerHTML = "";
  let filterThriller = booksAll.filter((item) => item.thriller == true);
  console.log(filterThriller);
  thriller.classList.add("activeBtn");
  science.classList.remove("activeBtn");
  all.classList.remove("activeBtn");
  horror.classList.remove("activeBtn");
  history.classList.remove("activeBtn");
  filterThriller.forEach((book) => {
    const books22 = document.createElement("div");
    books22.innerHTML = `
        <div class="bg-whiteColor max-w-fit book">
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
    books2.appendChild(books22);
  });
});
science.addEventListener("click", () => {
  books2.innerHTML = "";
  let filterScience = booksAll.filter((item) => item.science == true);
  console.log(filterScience);
  science.classList.add("activeBtn");
  all.classList.remove("activeBtn");
  horror.classList.remove("activeBtn");
  thriller.classList.remove("activeBtn");
  history.classList.remove("activeBtn");
  filterScience.forEach((book) => {
    const books22 = document.createElement("div");
    books22.innerHTML = `
        <div class="bg-whiteColor max-w-fit book">
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
    books2.appendChild(books22);
  });
});
history.addEventListener("click", () => {
  books2.innerHTML = "";
  let filterHistory = booksAll.filter((item) => item.history == true);
  console.log(filterHistory);
  history.classList.add("activeBtn");
  science.classList.remove("activeBtn");
  all.classList.remove("activeBtn");
  horror.classList.remove("activeBtn");
  thriller.classList.remove("activeBtn");
  filterHistory.forEach((book) => {
    const books22 = document.createElement("div");
    books22.innerHTML = `
        <div class="bg-whiteColor max-w-fit book">
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
    books2.appendChild(books22);
  });
});
// Search

inp.addEventListener("input", () => {
  data.innerHTML = "";
  const searchText = books.filter((item) => {
    return item.name.toLowerCase().includes(inp.value.toLowerCase());
  });

  if (searchText.length === 0) {
    const noResults = document.createElement("div");
    noResults.innerHTML =
      "<p class='text-center text-lg my-4'>Hech narsa topilmadi</p>";
    data.appendChild(noResults);
  } else {
    searchText.forEach((book) => {
      const card = document.createElement("div");
      card.innerHTML = `
        <div class="bg-whiteColor sm:max-w-fit w-full book">
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
  }
});

let cart_btn = document.querySelector(".cart_btn");

cart_btn.addEventListener("click", () => {
  window.location.href = "/public/cart.html";
});
