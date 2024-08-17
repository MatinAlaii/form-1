let users = [
  { username: "MatinAlaii44@gmail.com", password: "Matin1385" },
  { username: "AhmadMohamady@gmail.com", password: "Ahmad1372" },
];

const inputUsername = document.getElementById("userName");
const inputPassword = document.getElementById("password");
let btn = document.getElementById("btn");
const emailMessage = document.getElementById("messageEmail");
const passwordMessage = document.getElementById("messagePassword");

inputUsername.addEventListener("input", cheakEmail);
function cheakEmail() {
  let res = validateEmail(inputUsername.value);
  if (res == null) {
    emailMessage.innerHTML = "ایمیل خود را درست وارد کنید";
  } else {
    emailMessage.innerHTML = " ";
  }
}

inputPassword.addEventListener("input", cheakPassword);
function cheakPassword() {
  if (inputPassword.value.length < 8) {
    passwordMessage.innerHTML = "پسورد خود را درست وارد کنید";
  } else {
    passwordMessage.innerHTML = " ";
  }
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

btn.addEventListener("click", login);

function login() {
  for (let index = 0; index < users.length; index++) {
    if (
      users[index].username === inputUsername.value &&
      users[index].password === inputPassword.value
    ) {
      alert("User login");
      break;
    } else {
      alert("user onlogin");
      break;
    }
  }
}
