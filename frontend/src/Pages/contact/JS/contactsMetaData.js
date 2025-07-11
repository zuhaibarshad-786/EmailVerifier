export const CommonQuestionList = [
  {
    question: "How accurate is your email verification?",
    answer:
      "Our email verification service achieves 99.5% accuracy through advanced validation techniques including syntax checking, domain verification, and mailbox validation",
  },
  {
    question: "Do you offer API integration?",
    answer:
      "Yes, we provide RESTful API access for Pro and Enterprise plans. Our API supports real-time verification with comprehensive documentation and code examples",
  },
  {
    question: "What file formats do you support for bulk uploads?",
    answer:
      "We support CSV, TXT, and Excel files for bulk email verification. You can upload files up to 100MB with our user-friendly bulk verification tool",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use enterprise-grade encryption, never store your email lists permanently, and are fully GDPR compliant to protect your data privacy",
  },
];

//Function for sending mail

export function sendMail(userName, userMail, subject, message) {
  //Regix to validate Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const user_name = document.querySelector(".userName");
  const user_mail = document.querySelector(".userMail");
  const _subject = document.querySelector(".subject");
  const _message = document.querySelector(".message");
  const _nameerrormsg = document.querySelector(".name-error-message");
  const _emailerrormsg = document.querySelector(".email-error-message");
  const _subjecterrormsg = document.querySelector(".subject-error-message");
  const _errormsg = document.querySelector(".error-message");

  //Remove Error Classes
  _message.classList.remove("error");
  _subject.classList.remove("error");
  user_mail.classList.remove("error");
  user_name.classList.remove("error");
  _nameerrormsg.classList.remove("error-msg-p");
  _emailerrormsg.classList.remove("error-msg-p");
  _subjecterrormsg.classList.remove("error-msg-p");
  _errormsg.classList.remove("error-msg-p");

  let isError = false;

  if (userName.current.value === "") {
    _nameerrormsg.classList.add("error-msg-p");
    user_name.classList.add("error");
    isError = true;
  }
  if (userMail.current.value === "") {
    _emailerrormsg.classList.add("error-msg-p");
    user_mail.classList.add("error");
    isError = true;
  } else if (!emailRegex.test(userMail.current.value.trim())) {
    user_mail.classList.add("error");
    _emailerrormsg.innerHTML = "Enter valid email.";
    _emailerrormsg.classList.add("error-msg-p");

    isError = true;
  }
  if (subject.current.value === "") {
    _subjecterrormsg.classList.add("error-msg-p");
    _subject.classList.add("error");
    isError = true;
  }
  if (message.current.value === "") {
    _errormsg.classList.add("error-msg-p");
    _message.classList.add("error");

    isError = true;
  }

  if (isError) {
    return false;
  }

  //API Call Here

  //Remove Error Classes
  _message.classList.remove("error");
  _subject.classList.remove("error");
  user_mail.classList.remove("error");
  user_name.classList.remove("error");
  _nameerrormsg.classList.remove("error-msg-p");
  _emailerrormsg.classList.remove("error-msg-p");
  _subjecterrormsg.classList.remove("error-msg-p");
  _errormsg.classList.remove("error-msg-p");

  //Making the files empty
  message.current.value = "";
  subject.current.value = "";
  userMail.current.value = "";
  userName.current.value = "";
  return true;
}
