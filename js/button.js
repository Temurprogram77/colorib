const email = localStorage.getItem("email");
const sign = document.querySelector(".sign");
const welcomeMsg = document.querySelector(".welcomeMsg");

if (email) {
  const firstLetter = email.charAt(0).toUpperCase();
  welcomeMsg.textContent = firstLetter;
  welcomeMsg.classList.remove("hidden");
  sign.classList.add("hidden");
} else {
  sign.classList.remove("hidden");
  sign.addEventListener("click", function () {
    window.location.href = "/public/sign-in.html";
  });
}

if (email) {
  const firstLetter = email.charAt(0).toUpperCase();
  welcomeMsg.textContent = firstLetter;
  welcomeMsg.classList.remove("hidden");

  modalEmail.textContent = email;

  welcomeMsg.addEventListener("click", function () {
    modal.classList.remove("hidden");
  });
} else {
  loginBtn.classList.remove("hidden");
  loginBtn.addEventListener("click", function () {
    window.location.href = "login.html";
  });
}

logoutBtn.addEventListener("click", function () {
  localStorage.clear();
  window.location.reload();
});

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});
