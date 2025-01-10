const email = localStorage.getItem("email");
const loginBtn = document.getElementById("loginBtn");
const welcomeMsg = document.getElementById("welcomeMsg");

if (email) {
  // Agar foydalanuvchi login qilgan bo'lsa
  welcomeMsg.classList.remove("hidden"); // "Salom" yozuvini ko'rsatadi
} else {
  // Agar foydalanuvchi login qilmagan bo'lsa
  loginBtn.classList.remove("hidden"); // "Login" tugmasini ko'rsatadi
  loginBtn.addEventListener("click", function () {
    window.location.href = "login.html"; // Login sahifasiga yo'naltirish
  });
}
