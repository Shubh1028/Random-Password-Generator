let password1 = document.getElementById("password-one");
let password2 = document.getElementById("password-two");
let password3 = document.getElementById("password-three");
let password4 = document.getElementById("password-four");
let input = document.getElementById("input-box");

let allPassword = [password1, password2, password3, password4];

function generator(len) {
  let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&*()_+=";
  let result = "";
  for (let i = 0; i < len; i++) {
    result += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return result;
}

function passwordAll() {
  let len = parseInt(input.value);
  if (len >= 5 && len <= 15) {
    for (let i = 0; i < allPassword.length; i++) {
      allPassword[i].textContent = generator(len);
    }
  } else {
    return alert("Please Select Only Numbers From 5 To 15");
  }
}

function copyItem1() {
  const content = password1.textContent;
  navigator.clipboard.writeText(content);
  alert("Password Copied To clipboard");
}
function copyItem2() {
  const content = password2.textContent;
  navigator.clipboard.writeText(content);
  alert("Password Copied To clipboard");
}
function copyItem3() {
  const content = password3.textContent;
  navigator.clipboard.writeText(content);
  alert("Password Copied To clipboard");
}
function copyItem4() {
  const content = password4.textContent;
  navigator.clipboard.writeText(content);
  alert("Password Copied To clipboard");
}
