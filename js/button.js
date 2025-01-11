const email = localStorage.getItem("email");
const sign = document.querySelector(".sign");
const welcomeMsg = document.querySelector(".welcomeMsg");

if (email) {
  const firstLetter = email.charAt(0).toUpperCase();
  welcomeMsg.textContent = firstLetter;
  welcomeMsg.classList.remove("hidden");
  sign.classList.add("hidden");

  modalEmail.textContent = email;

  welcomeMsg.addEventListener("click", function () {
    modal.classList.remove("hidden");
  });
} else {
  sign.classList.remove("hidden");
  sign.addEventListener("click", function () {
    setTimeout(function () {
      window.location.href = "/public/sign-in.html";
    }, 1000);
  });
}

logoutBtn.addEventListener("click", function () {
  localStorage.clear();
  setTimeout(() => {
    window.location.reload();
  }, 500);
});

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});
