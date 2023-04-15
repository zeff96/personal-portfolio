const formEl = document.querySelector(".form");
const formControl = document.querySelector(".form-input");
const emailEl = document.getElementById("email");
const msgEl = document.querySelector(".msg");
const nameEl = document.getElementById("name");
const textEl = document.getElementById("textarea");

function showError(input, message) {
  msgEl.innerHTML = message;
}

function showSuccess() {
  formControl.classList.add("valid");
}

function checkInput() {
  const emailValue = emailEl.value;

  if (emailValue !== emailValue.toLowerCase()) {
    showError(emailEl, "The content has to be in lower case!");
  } else {
    showSuccess(emailEl);
    formEl.submit();
  }
}

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInput();
});

const userData = JSON.parse(localStorage.getItem("userInfo"));

if (userData) {
  nameEl.value = userData.name;
  emailEl.value = userData.email;
  textEl.value = userData.text;
}

function getData() {
  const nameData = nameEl.value;
  const emailData = emailEl.value;
  const textData = textEl.value;

  const userInfo = {
    name: nameData,
    email: emailData,
    text: textData,
  };

  localStorage.setItem("userInfo", JSON.stringify(userInfo));
}
formEl.addEventListener("input", getData);
formEl.addEventListener("submit", getData);
