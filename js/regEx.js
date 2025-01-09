let email = document.querySelector("#email");
let password = document.querySelector("#password");
let btn = document.querySelector("#btn");
let wrong = document.querySelector(".wrong");
let wrong2 = document.querySelector(".wrong2");

btn.addEventListener("click", () => {
  const emailRegEx = /[a-z0-9]{6,12}@gmail/;
  const passwordRegEx = /^[0-9]{8,12}$/;
  let emailValue = email.value;
  let passwordValue = password.value;
  if (emailRegEx.test(emailValue) && passwordRegEx.test(passwordValue)) {
    window.location.href = '/index.html';
  } else {
    email.style.border = "2px solid red" 
    password.style.border = "2px solid red" 
    wrong.textContent = "Please enter your email [a-z] [6-12] @gmail.com";
    wrong2.textContent = "Please enter your password (only numbers [8-12])"
  }
});
