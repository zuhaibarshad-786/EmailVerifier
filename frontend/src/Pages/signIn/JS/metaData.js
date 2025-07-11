//function to validate Username and Password
export function validateSignIn(username, password, checkbox) {
  //Regix to validate Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const _username = document.querySelector(".username");
  const _password = document.querySelector(".password");
  const _checkbox = document.querySelector(".checkbox");
  const _passworderrormsg = document.querySelector(".password-error-message");
  const _emailerrormsg = document.querySelector(".email-error-message");

  //Remove Error Classes
  _username.classList.remove("error");
  _password.classList.remove("error");
  _checkbox.classList.remove("checkbox-error");
  _passworderrormsg.classList.remove("error-msg-p");
  _emailerrormsg.classList.remove("error-msg-p");


  let isError = false;

  if (username.current.value.trim() === "") {
    _username.classList.add("error");
    _emailerrormsg.classList.add("error-msg-p");
    isError = true;
  } else if (!emailRegex.test(username.current.value.trim())) {
    _username.classList.add("error");
    _emailerrormsg.innerHTML = "Enter valid email.";
    _emailerrormsg.classList.add("error-msg-p");
    isError = true;
  }
  if (password.current.value === "") {
    _password.classList.add("error");
    _passworderrormsg.classList.add("error-msg-p");
    isError = true;
  }
  if (!checkbox.current.checked) {
    _checkbox.classList.add("checkbox-error");
    isError = true;
  }

  if (isError) {
    return false;
  }

  //API Call Here

  //Remove Error Classes
  _username.classList.remove("error");
  _password.classList.remove("error");
  _checkbox.classList.remove("checkbox-error");
  _passworderrormsg.classList.remove("error-msg-p");
  _emailerrormsg.classList.remove("error-msg-p");

  //Making the files empty
  username.current.value = "";
  password.current.value = "";
  checkbox.current.checked = false;
  return true;
}
