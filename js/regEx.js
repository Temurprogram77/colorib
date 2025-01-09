let email = document.querySelector("#email");
let password = document.querySelector("#password");
let btn = document.querySelector("#btn");
let wrong = document.querySelector(".wrong");
let wrong2 = document.querySelector(".wrong2");

btn.addEventListener("click", () => {
//   e.preventDefault();
  const emailRegEx = /[a-z0-9]{6,12}@gmail/;
  const passwordRegEx = /^[0-9]{8,12}$/;
//   const nameRegEx = /[a-zA-Z]{8,12}/;
  let emailValue = email.value;
  let passwordValue = password.value;
  if (emailRegEx.test(emailValue) && passwordRegEx.test(passwordValue)) {
    window.location.href = '/index.html';
  } else {
    wrong.textContent = "Please enter your email address"
    wrong2.textContent = "Please enter your password"
  }
});
