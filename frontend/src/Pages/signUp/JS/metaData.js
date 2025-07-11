//function to validate Username and Password
export function validateSignUp(
  name,
  email,
  password,
  confirmPassword,
  checkbox
) {
  //Regix to validate Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const _name = document.querySelector(".name");
  const _email = document.querySelector(".email");
  const _password = document.querySelector(".password");
  const _confirmpassword = document.querySelector(".confirmPassword");
  const _checkbox = document.querySelector(".checkbox");
  const _errormsg = document.querySelector(".error-message");
  const _passworderrormsg = document.querySelector(".password-error-message");
  const _emailerrormsg = document.querySelector(".email-error-message");
  const _nameerrormsg = document.querySelector(".name-error-message");

  //Remove Error Classes
  _name.classList.remove("error");
  _email.classList.remove("error");
  _password.classList.remove("error");
  _confirmpassword.classList.remove("error");
  _checkbox.classList.remove("checkbox-error");
  _errormsg.classList.remove("error-msg-p");
  _nameerrormsg.classList.remove("error-msg-p");
  _passworderrormsg.classList.remove("error-msg-p");
  _emailerrormsg.classList.remove("error-msg-p");

  let isError = false;

  if (name.current.value === "") {
    _name.classList.add("error");
    _nameerrormsg.classList.add("error-msg-p");
    isError = true;
  }
  if (email.current.value.trim() === "") {
    _email.classList.add("error");
    _emailerrormsg.innerHTML = "Email is required.";
    _emailerrormsg.classList.add("error-msg-p");
  } else if (!emailRegex.test(email.current.value.trim())) {
    _email.classList.add("error");
    _emailerrormsg.innerHTML = "Enter valid email.";
    _emailerrormsg.classList.add("error-msg-p");

    isError = true;
  }
  if (password.current.value === "") {
    _password.classList.add("error");
    _passworderrormsg.classList.add("error-msg-p");
    isError = true;
  }
  if (confirmPassword.current.value === "") {
    _confirmpassword.classList.add("error");
    isError = true;
  }
  if (!checkbox.current.checked) {
    _checkbox.classList.add("checkbox-error");
    isError = true;
  }

  if (password.current.value !== confirmPassword.current.value) {
    _password.classList.add("error");
    _confirmpassword.classList.add("error");
    _errormsg.classList.add("error-msg-p");
    isError = true;
  }

  if (isError) {
    return false;
  }

  //API Call Here

  //Remove Error Classes
  _name.classList.remove("error");
  _email.classList.remove("error");
  _password.classList.remove("error");
  _confirmpassword.classList.remove("error");
  _checkbox.classList.remove("checkbox-error");
  _errormsg.classList.remove("error-msg-p");
  _nameerrormsg.classList.remove("error-msg-p");
  _passworderrormsg.classList.remove("error-msg-p");
  _emailerrormsg.classList.remove("error-msg-p");

  //Making the files empty
  name.current.value = "";
  email.current.value = "";
  password.current.value = "";
  confirmPassword.current.value = "";
  checkbox.current.checked = false;
  return true;
}
