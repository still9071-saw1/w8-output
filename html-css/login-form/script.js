const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// ページを開いた時、保存済みデータがあれば入力欄に入れる
const saveEmail = localStorage.getItem("email");
const savePassword = localStorage.getItem("password");

if (saveEmail) {
  emailInput.value = saveEmail;
}

if (savePassword) {
  passwordInput.value = savePassword;
}

// Sign inが押された時に保存する
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  localStorage.setItem("email", emailInput.value);
  localStorage.setItem("password", passwordInput.value);

  console.log("保存しました");
  console.log(localStorage.getItem("email"));
  console.log(localStorage.getItem("password"));
});
