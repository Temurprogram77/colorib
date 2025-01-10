const email = localStorage.getItem("email");
const sign = document.querySelector(".sign");
const welcomeMsg = document.querySelector(".welcomeMsg");

if (email) {
  // Agar foydalanuvchi login qilgan bo'lsa
  welcomeMsg.classList.remove("hidden"); // "Salom" yozuvini ko'rsatadi
  sign.classList.add("hidden"); // "Salom" yozuvini ko'rsatadi
} else {
  // Agar foydalanuvchi login qilmagan bo'lsa
  sign.classList.remove("hidden"); // "Login" tugmasini ko'rsatadi
  sign.addEventListener("click", function () {
    window.location.href = "/public/sign-in.html"; // Login sahifasiga yo'naltirish
  });
}
