var userName = document.getElementById("userName");

var Gmail = document.getElementById("gmail");

var password = document.getElementById("password");

var btn = document.getElementById("btn");

var Name = "Matin";

var GmailName = "MatinAlaii44@gmail.com";

var Passkey = "Matin1385";

btn.addEventListener("click", add);

function add(params) {
  if (userName.value === Name) {
    console.log("Nice");
  } else {
    alert("your user Name incorrect");
  }

  if (password.value === Passkey) {
    console.log("good1");
  } else {
    alert("your Password incorrect");
  }

  if (Gmail.value === GmailName) {
    console.log("good");
  } else {
    alert("your Gmail incorrect");
  }

  alert("Welcome Matin");
}
