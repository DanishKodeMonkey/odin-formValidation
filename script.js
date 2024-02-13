const pwd = document.getElementById("user_pwd")
const pwd_match = document.getElementById("user_confPwd")
let errMsg = document.getElementById("errMsg")

/* Function checks passwords for match */
function checkPasswords() {
  console.log(pwd.value, pwd_match.value)
  if (pwd_match.value == pwd.value) {
    errMsg.textContent = ""
    pwd.classList.remove("error")
    pwd_match.classList.remove("error")
  } else {
    console.log("Does not match")
    pwd.classList.add("error")
    pwd_match.classList.add("error")
    errMsg.textContent = "*Passwords do not match"
  }
}
